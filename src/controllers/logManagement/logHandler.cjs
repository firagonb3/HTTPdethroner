const { textColor, colors } = require('../../utils/CommonJS/textColor.cjs');
const { FileDirectoryManager } = require('../../utils/CommonJS/FileDirectoryManager.cjs')
const formatISODateToReadable = require('../../utils/CommonJS/formatISODateToReadable.cjs')

let win = [];
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
        case typeLog.ERROR:
            return { textColor: textColor(colors.fgRed, typeLog.ERROR), text: typeLog.ERROR };
        case typeLog.WARNING:
            return { textColor: textColor(colors.fgYellow, typeLog.WARNING), text: typeLog.WARNING };
        case typeLog.INFO:
            return { textColor: textColor(colors.fgGreen, typeLog.INFO), text: typeLog.INFO };
        default:
            return { textColor: type, text: type };
    }
}

const logHandler = {
    init: (window, Path, File) => {
        win.push(window);
        logFile = File
        logPath = Path
    },
    addWin: (window) => {
        win.push(window);
    },
    removeWin: (window) => {
        const i = win.indexOf(window);
        win.splice(i, 1);
    },
    logToRenderer: (type, ...args) => {
        type = type.toUpperCase();
        const typeFormat = selectType(type);

        win.map((v, i) => {
            if (v && v.webContents) {
                v.webContents.send('logMessage', { type, args });
            }
        })

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