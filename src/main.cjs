const { app, BrowserWindow } = require('electron/main');
const IPCmain = require('./controllers/ipc/IPCmain.cjs');
const window = require('./controllers/windows/window.cjs');
const windata = require('./windata.cjs');

app.whenReady().then(() => {
    const win = [
        window.init(windata.winMain)
    ];

    IPCmain(win);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            window.init(windata.winMain)
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})