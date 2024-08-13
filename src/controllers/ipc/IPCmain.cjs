const barControlIpc = require('./barControlIpc.cjs');
const httpServerIpc = require('./httpServerIpc.cjs');
const themeModeIpc = require('./themeModeIpc.cjs');
const newWindowIpc = require('./newWindowIpc.cjs')
const openFileDialog = require('./openFileDialog.cjs')

function IPCmain(win = null) {
    newWindowIpc(win)
    barControlIpc(win);
    httpServerIpc();
    themeModeIpc();
    openFileDialog();
}

module.exports = IPCmain;