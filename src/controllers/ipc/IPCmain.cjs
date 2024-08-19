const {logHandler , typeLog } = require('../logManagement/logHandler.cjs')
const barControlIpc = require('./barControlIpc.cjs');
const httpServerIpc = require('./httpServerIpc.cjs');
const themeModeIpc = require('./themeModeIpc.cjs');
const newWindowIpc = require('./newWindowIpc.cjs')
const openFileDialog = require('./openFileDialog.cjs')
const DBconnectIPC = require('./DBconnectIPC.cjs')

function IPCmain(win = null) {
    try {
        newWindowIpc(win);
        barControlIpc(win);
        httpServerIpc();
        themeModeIpc();
        openFileDialog();
        DBconnectIPC();
    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, 'Error initializing IPC modules:', error)
    }
}

module.exports = IPCmain;