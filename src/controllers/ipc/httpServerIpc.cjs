const { ipcMain } = require('electron/main');
const { start, stop } = require('../../http/server.cjs')

function httpServerIpc() {
    ipcMain.handle('http:start', (e, port) => {
        console.log(port);
        start(port);
    });

    ipcMain.handle('http:stop', () => {
        stop();
    });
}

module.exports = httpServerIpc;