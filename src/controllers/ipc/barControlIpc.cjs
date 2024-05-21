const { app, ipcMain } = require('electron/main');


function barControlIpc(win = null) {
    ipcMain.handle('remote:close', (e, id) => {
        const windowToClose = win.find(win => win.id === id);
        console.log(win[0].id, id);
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