const { ipcMain } = require('electron/main');
const { logHandler } = require('../logManagement/logHandler.cjs')
const window = require('../windows/window.cjs');
const windata = require('../../windata.cjs');

function newWindowIpc(win) {
    ipcMain.handle('newWindow:add', (e, name, log = false) => {
        win.push(window.init(windata[name]));
        const newWin = win[win.length - 1]
        if (log) logHandler.addWin(newWin);
        newWin.on('closed', () => {
            const i = win.indexOf(newWin);
            if (log) logHandler.removeWin(newWin);
            win.splice(i, 1);
        });
    });
}

module.exports = newWindowIpc;