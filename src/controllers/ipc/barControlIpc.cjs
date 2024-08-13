const { ipcMain } = require('electron');

function barControlIpc(win) {
    ipcMain.handle('remote:close', (e, id) => {
        const windowToClose = win.find(win => win.id === id);
        if (windowToClose) {
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