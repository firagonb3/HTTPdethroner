const { textColor, colors } = require('./textColor.cjs');
const { FileDirectoryManager } = require('./FileDirectoryManager.cjs')

let mainWindow;
let logFile;
let logPath;

function initializeLogHandler(window, Path, File) {
    mainWindow = window;
    logFile = File
    logPath = Path
}

const typeLog = {
    INFO: "INFO",
    WARNING: "WARNING",
    ERROR: "ERROR",
    LOG: "LOG"
}

function selectType(type) {
    switch (type) {
        case "ERROR":
            return textColor(colors.fgRed, "ERROR");
        case "WARNING":
            return textColor(colors.fgYellow, "WARNING");
        case "INFO":
            return textColor(colors.fgBlue, "INFO");
        default:
            return textColor(colors.fgGreen, "LOG");

    }
}

function logToRenderer(type, ...args) {
    type = type.toUpperCase();
    const typeFormat = selectType(type);

    if (mainWindow && mainWindow.webContents) {
        mainWindow.webContents.send('logMessage', { type, args });
    }
    const missig = `[${typeFormat}] ${args.join(' ')}`;
    console.log(missig);
    FileDirectoryManager.writeFile(missig, logPath, logFile);
}

module.exports = {
    initializeLogHandler,
    logToRenderer,
    typeLog
};