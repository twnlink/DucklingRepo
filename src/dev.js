if (!parseInt(process.version.substring(1, 3)) >= 15) {
  console.error(`Node v15 or above required, aborting`);
  process.exit();
}

import { dirname, sep, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import AutoTag from './autoTag.js';

import Parcel from 'parcel-bundler';

import glob from 'glob';
import chokidar from 'chokidar';

import { createServer } from 'http';

import { rmSync, mkdirSync, readFileSync, writeFileSync, readFile, readdirSync, copyFileSync, rmdirSync, statSync, existsSync } from 'fs';
import { createHash } from 'crypto';

var copyRecursiveSync = function(src, dest) { // https://stackoverflow.com/a/22185855
  var exists = existsSync(src);
  var stats = exists && statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    mkdirSync(dest);
    readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(join(src, childItemName),
                        join(dest, childItemName));
    });
  } else {
    copyFileSync(src, dest);
  }
};

const dir = process.argv[2];
const port = parseInt(process.argv[3]);

const rootDir = __dirname.replace(`${sep}src`, '');

const distDir = `${rootDir}/devDist`;
const modulesDir = `${distDir}/module`;

const tempDir = `${rootDir}/devTemp`;

console.log(dir, distDir, modulesDir);

const parcelOptions = {
  minify: true,
  watch: false,
  sourceMaps: false,
  outDir: modulesDir,
  logLevel: 0
};

createServer((req, res) => {
  const goodUrl = decodeURI(req.url);
  const basedPath = `${distDir}${goodUrl.split('?').shift().replace(/\.\./g, '')}`;

  let contentType = 'text/plain';

  switch (goodUrl.split('.').pop()) {
    case 'js':
      contentType = 'text/javascript';
      break;

    case 'json':
      contentType = 'application/json';
      break;
  }

  console.log(basedPath, contentType);

  readFile(basedPath, (err, content) => {
    if (err) {
      res.writeHead(400, { 'Content-Type': contentType });
      res.end('Request error', 'utf-8');

      return;
    }

    res.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
    res.end(content, 'utf-8');
  });
}).listen(port);

const resetDir = (dir, make = true) => {
  rmSync(dir, { recursive: true, force: true });
  if (make) mkdirSync(dir, { recursive: true });
};

const build = async () => {
  console.log('building');

  resetDir(tempDir, false);
  copyRecursiveSync(dir, tempDir)
  
  resetDir(distDir);
  resetDir(modulesDir);

  const modules = glob.sync(`${tempDir}/**/goosemodModule.json`).map((x) => x.split('/').slice(0, -1).join('/'));

  const jsonOut = {
    modules: [],
    
    meta: {
      name: 'MS2Builder Dev Repo',
      description: 'Local repo for testing, generated by MS2Builder Dev'
    }
  };
  
  for (const m of modules) {
    const dirname = m.split('/').pop();
    console.time(dirname);
  
    const manifest = JSON.parse(readFileSync(`${m}/goosemodModule.json`));
    
    // console.log(manifest);
    
    const outFile = `${manifest.name}.js`;

    const bundler = new Parcel(`${m}/${manifest.main}`, Object.assign(parcelOptions, {
      outFile
    }));
    
    const bundle = await bundler.bundle();

    const outPath = `${modulesDir}/${outFile}`;
    let jsCode = readFileSync(outPath, 'utf8');
    
    jsCode = `${jsCode};parcelRequire('${bundle.entryAsset.basename}').default`; // Make eval return the index module's default export
    
    // console.log(jsCode);
    
    writeFileSync(outPath, jsCode);
    
    const jsHash = createHash('sha512').update(jsCode).digest('hex');
    
    const manifestJson = {
      name: manifest.name,
      description: manifest.description,
      
      version: manifest.version,
      
      tags: AutoTag(jsCode, manifest.tags),
      
      authors: manifest.authors,
      
      hash: jsHash,
      
      github: {
        stars: 0,
        repo: 'GooseMod/MS2Builder'
      }
    };
    
    if (manifest.images) manifestJson.images = manifest.images;
    if (manifest.dependencies) manifestJson.dependencies = manifest.dependencies;

    console.timeEnd(dirname);
    
    jsonOut.modules.push(manifestJson);
  }

  writeFileSync(`${distDir}/modules.json`, JSON.stringify(jsonOut));
};

build();

chokidar.watch(dir).on('change', (ev, pa) => {
  console.log(ev, pa);
  build();
});

// await new Promise(() => {});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));