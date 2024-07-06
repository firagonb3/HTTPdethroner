const { ipcMain } = require('electron/main');
const { start, stop } = require('../../http/server.cjs')

function httpServerIpc() {
    ipcMain.handle('http:start', async (e, port) => {
        await start(port);
    });

    ipcMain.handle('http:restart', async (e, port) => {
        await stop();
        await start(port);
    });

    ipcMain.handle('http:stop', async () => {
        await stop();
    });
}

module.exports = httpServerIpc;