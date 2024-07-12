const { ipcMain } = require('electron/main');
const { logHandler } = require('../logManagement/logHandler.cjs')
const window = require('../windows/window.cjs');
const windata = require('../../windata.cjs');

function newWindowIpc(win) {
    ipcMain.handle('newWindow:add', (e, name, log = false) => {
        win.push(window.init(windata[name]));
        if (log) logHandler.addWin(win[win.length - 1]);
    });
}

module.exports = newWindowIpc;