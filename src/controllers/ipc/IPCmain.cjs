const barControlIpc = require('./barControlIpc.cjs');
const httpServerIpc = require('./httpServerIpc.cjs');
const themeModeIpc = require('./themeModeIpc.cjs');

function IPCmain(win = null) {
    barControlIpc(win);
    httpServerIpc();
    themeModeIpc();
}

module.exports = IPCmain;