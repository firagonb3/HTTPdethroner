const { ipcMain } = require('electron');
const { start, stop } = require('../../http/server.cjs')

function httpServerIpc() {
    ipcMain.handle('http:start', async () => {
        await start();
    });

    ipcMain.handle('http:restart', async () => {
        await stop();
        await start();
    });

    ipcMain.handle('http:stop', async () => {
        await stop();
    });
}

module.exports = httpServerIpc;