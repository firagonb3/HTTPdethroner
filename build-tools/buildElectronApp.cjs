const { remove, ensureDir, copy, pathExists } = require('fs-extra');
const minimist = require('minimist');
const packager = require('electron-packager');
const { createPackage } = require('asar');
const { join } = require('path');
const { installDependencies } = require('./installDependencies.cjs');

const validOS = ['win', 'linux'];
const args = minimist(process.argv.slice(2));
const providedOS = validOS.filter(os => args[os]);

if (Object.keys(args).length === 1 && args._.length === 0) {
  throw new Error("No arguments specified");
}

if (providedOS.length > 1) {
  throw new Error("You specified more than one operating system. Use only one.");
}

let SYSOS;
if (args.win) {
  SYSOS = 'win32'; 
} else if (args.linux) {
  SYSOS = 'linux';
} else {
  throw new Error("Invalid operating system specified. Please use --win or --linux.");
}

const projectRoot = join(__dirname, '..');
const { name, version, author } = require(join(projectRoot, 'package.json'));
const srcDir = join(projectRoot, 'src');
const outDist = join(projectRoot, 'dist')
const outDir = join(__dirname, 'build');
const outDirSrc = join(outDir, 'src');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function buildElectronApp() {
  try {
    // Verificar la existencia de package.json y node_modules
    const [packageJsonExiste, nodeModulesExiste] = await Promise.all([
      pathExists(join(__dirname, 'package.json')),
      pathExists(join(__dirname, 'node_modules'))
    ]);

    if (args.force || !packageJsonExiste || !nodeModulesExiste) {
      await installDependencies();
      await sleep(10000);
    }

    // Limpiar y asegurar el directorio de salida
    await remove(outDir);
    await ensureDir(outDir);

    // Copiar los archivos necesarios
    await copy(srcDir, outDirSrc);
    await copy(join(__dirname, 'package.json'), join(outDir, 'package.json'));

    // Instalar dependencias en el directorio de salida
    await copy(join(__dirname, 'node_modules'), join(outDir, 'node_modules'));

    // Ejecutar electron-packager
    const appPaths = await packager({
      dir: outDir,
      out: outDist,
      overwrite: true,
      platform: SYSOS,
      arch: 'x64',
      prune: true,
      name: name,
      appVersion: version,
      author: author
    });

    await remove(outDir);

    // Empaquetar en app.asar
    const appPath = appPaths[0];
    const resourcesPath = join(appPath, 'resources');
    const appAsarPath = join(resourcesPath, 'app.asar');
    await createPackage(join(resourcesPath, 'app'), appAsarPath);

    // Eliminar la carpeta app descomprimida después de crear app.asar
    await remove(join(resourcesPath, 'app'));

    console.log('');
    console.log('******************************');
    console.log('Build completed successfully!');
    console.log('******************************');
    console.log('');
  } catch (error) {
    console.error('Error during build:', error);
  }
}

buildElectronApp();
