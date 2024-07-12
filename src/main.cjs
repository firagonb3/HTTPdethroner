const { app, BrowserWindow } = require('electron/main');
const IPCmain = require('./controllers/ipc/IPCmain.cjs');
const { logHandler } = require('./controllers/logManagement/logHandler.cjs');
const formatISODateToReadable = require('./utils/CommonJS/formatISODateToReadable.cjs')
const window = require('./controllers/windows/window.cjs');
const windata = require('./windata.cjs');

const { FileDirectoryManager } = require('./utils/CommonJS/FileDirectoryManager.cjs');

app.whenReady().then(() => {
    const date = formatISODateToReadable(new Date().toISOString())
    const logPath = 'logs';
    const logFile = 'app.log';

    const win = [
        window.init(windata.winMain),
    ];

    IPCmain(win);
    
    FileDirectoryManager.createDirectory(logPath);
    FileDirectoryManager.writeFile(logPath, logFile, date, " - *********************");
    FileDirectoryManager.writeFile(logPath, logFile, date, " - Execute App");
    FileDirectoryManager.writeFile(logPath, logFile, date, " - *********************");
    logHandler.init(win[0], logPath, logFile);

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