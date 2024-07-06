const { textColor, colors } = require('./textColor.cjs');
const { FileDirectoryManager } = require('./FileDirectoryManager.cjs')
const formatISODateToReadable = require('./formatISODateToReadable.cjs')

let mainWindow;
let logFile;
let logPath;

const typeLog = {
    INFO: "INFO",
    WARNING: "WARNING",
    ERROR: "ERROR",
    LOG: "LOG"
}

function selectType(type) {
    switch (type) {
        case "ERROR":
            return { textColor: textColor(colors.fgRed, "ERROR"), text:'ERROR' };
        case "WARNING":
            return { textColor: textColor(colors.fgYellow, "WARNING"), text: 'WARNING' };
        case "INFO":
            return { textColor: textColor(colors.fgGreen, "INFO"), text: 'INFO' };
        default:
            return { textColor: textColor(colors.fgWhite, "LOG"), text: 'LOG' };
    }
}

const logHandler = {
    init: (window, Path, File) => {
        mainWindow = window;
        logFile = File
        logPath = Path
    },
    logToRenderer: (type, ...args) => {
        type = type.toUpperCase();
        const typeFormat = selectType(type);

        if (mainWindow && mainWindow.webContents) {
            mainWindow.webContents.send('logMessage', { type, args });
        }

        const date = formatISODateToReadable(new Date().toISOString())
        const missig = ` - [${typeFormat.text}] ${args.join(' ')}`
        console.log(`[${typeFormat.textColor}] ${args.join(' ')}`);
        FileDirectoryManager.writeFile(logPath, logFile, date, missig);
    }
}

module.exports = {
    logHandler,
    typeLog
};