const { remove, ensureDir, copy } = require('fs-extra');
const { join } = require('path');
const packager = require('electron-packager');
const { createPackage } = require('asar');


const projectRoot = join(__dirname, '..');
const { name, version, author } = require(join(projectRoot, 'package.json'));

const outDir = join(__dirname, 'build');
const outDirSrc = join(outDir, 'src');
const srcDir = join(__dirname, '..', 'src');

async function build() {
  try {
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
      out: join(__dirname, '..', 'dist'), // Corregido el path de salida
      overwrite: true,
      platform: 'win32',
      arch: 'x64',
      prune: true,
      name: name,
      appVersion: version,
      author: author
    });

    // Empaquetar en app.asar
    const appPath = appPaths[0];
    const resourcesPath = join(appPath, 'resources');
    const appAsarPath = join(resourcesPath, 'app.asar');
    await createPackage(join(resourcesPath, 'app'), appAsarPath);

    // Eliminar la carpeta app descomprimida después de crear app.asar
    await remove(join(resourcesPath, 'app'));

    // Limpiar el directorio temporal
    await remove(outDir);

    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Error during build:', error);
  }
}

build();
