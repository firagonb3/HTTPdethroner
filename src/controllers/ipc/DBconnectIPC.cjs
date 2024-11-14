const { ipcMain } = require('electron');
const addHost = require('../../models/addHost.cjs');
const { updateHostPort } = require('../../models/updateHost.cjs');
const { DeleteHost } = require('../../models/DeleteHost.cjs');
const { selectHostsAll, selectHostsPort } = require('../../models/selectHosts.cjs');

function DBconnectIPC() {
    ipcMain.handle('DBConnect:addHost', async (e, args) => {
        await addHost(args);
    });

    ipcMain.handle('DBConnect:UpdateHostPort', async (e, args) => {
        await updateHostPort(args);
    });

    ipcMain.handle('DBConnect:selectHostsAll', async () => {
        return selectHostsAll()
    });

    ipcMain.handle('DBConnect:selectHostsPort', async (e, args) => {
        return selectHostsPort(args)
    });

    ipcMain.handle('DBConnect:DeleteHostsPort', async (e, args) => {
        return DeleteHost(args)
    });
}

module.exports = DBconnectIPC;