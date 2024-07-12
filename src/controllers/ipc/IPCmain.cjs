const barControlIpc = require('./barControlIpc.cjs');
const httpServerIpc = require('./httpServerIpc.cjs');
const themeModeIpc = require('./themeModeIpc.cjs');
const newWindowIpc = require('./newWindowIpc.cjs')

function IPCmain(win = null) {
    newWindowIpc(win)
    barControlIpc(win);
    httpServerIpc();
    themeModeIpc();
}

module.exports = IPCmain;