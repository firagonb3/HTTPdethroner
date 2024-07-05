const { app, BrowserWindow } = require('electron/main');
const IPCmain = require('./controllers/ipc/IPCmain.cjs');
const { initializeLogHandler } = require('./utils/CommonJS/logHandler.cjs');
const window = require('./controllers/windows/window.cjs');
const windata = require('./windata.cjs');

const { FileDirectoryManager } = require('./utils/CommonJS/FileDirectoryManager.cjs');

app.whenReady().then(() => {
    const logPath = 'logs';
    const logFile = 'app.log';

    const win = [
        window.init(windata.winMain)
    ];

    IPCmain(win);
    
    FileDirectoryManager.createDirectory(logPath);
    FileDirectoryManager.writeFile("*********************", logPath, logFile);
    FileDirectoryManager.writeFile("Execute App", logPath, logFile);
    FileDirectoryManager.writeFile("*********************", logPath, logFile);
    initializeLogHandler(win[0], logPath, logFile);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            window.init(windata.winMain)
        }
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});