const { ipcMain } = require('electron/main');
const { logHandler } = require('../logManagement/logHandler.cjs')

function barControlIpc(win) {
    ipcMain.handle('remote:close', (e, id) => {
        const windowToClose = win.find(win => win.id === id);
        if (windowToClose) {
            const i = win.indexOf(windowToClose);
            logHandler.removeWin(windowToClose);
            win.splice(i, 1);
            windowToClose.close();
        }
    });

    ipcMain.handle('remote:minimizer', (e, id) => {
        const windowToMinimize = win.find(win => win.id === id);
        if (windowToMinimize) {
            windowToMinimize.minimize();
        }
    });
}

module.exports = barControlIpc;