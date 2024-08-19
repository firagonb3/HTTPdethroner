const { ipcMain } = require('electron');
const addDetailsRouter = require('../../models/addDetailsRouter.cjs');

function DBconnectIPC() {
    ipcMain.handle('DBConnect:addDetailsRouter', async (e, args) => {
        await addDetailsRouter(args);
    });
}

module.exports = DBconnectIPC;