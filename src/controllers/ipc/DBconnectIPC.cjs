const { ipcMain } = require('electron');
const addHost = require('../../models/addHost.cjs');
const selectHosts = require('../../models/selectHosts.cjs');

function DBconnectIPC() {
    ipcMain.handle('DBConnect:addHost', async (e, args) => {
        await addHost(args);
    });

    ipcMain.handle('DBConnect:selectHosts', async () => {
        return selectHosts()
    });
}

module.exports = DBconnectIPC;