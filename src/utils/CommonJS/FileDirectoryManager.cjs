const { app } = require('electron/main');
const isDev = require('./isDev.cjs');

const path = require('node:path');
const fs = require('node:fs');

let appFile = !isDev ? path.dirname(app.getAppPath(), '..', '..') : app.getAppPath();

const FileDirectoryManager = {
    setPaht: (setPaht) => {
        appFile = setPaht
    },
    createDirectory: (dirPath) => {
        const fullPath = path.join(appFile, dirPath);
        fs.mkdirSync(fullPath, { recursive: true });
        return { path: fullPath, text: `Directory '${fullPath}' created successfully.` };
    },
    removeDirectory: (dirPath) => {
        const fullPath = path.join(appFile, dirPath);
        fs.rmSync(fullPath, { recursive: true, force: true });
        return { text: `Directory '${fullPath}' deleted successfully.` };
    },
    writeFile: (dirPath, file, ...message) => {
        const filePath = path.join(appFile, dirPath, file);
        fs.appendFileSync(filePath, `${message.join('')}\n`, { encoding: 'utf8' });
        return { text: `Message written to '${filePath}' successfully.` };
    },
    removeFile: (filePath) => {
        const fullPath = path.join(appFile, filePath);
        fs.rmSync(fullPath, { force: true });
        return { text: `File '${fullPath}' deleted successfully.` };
    }
}

module.exports = {
    FileDirectoryManager
}
