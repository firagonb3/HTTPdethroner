const { ipcMain } = require('electron/main');
const { start, stop } = require('../../http/server.cjs')

function httpServerIpc() {
    ipcMain.handle('http:start', async (e, port) => {
        console.log(port);
        start(port);
    });

    ipcMain.handle('http:restart', async (e, port) => {
        console.log("restart", port);
        await stop();
        await start(port);
    });

    ipcMain.handle('http:stop', async () => {
        stop();
    });
}

module.exports = httpServerIpc;