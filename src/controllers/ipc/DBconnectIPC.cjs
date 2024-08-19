const { ipcMain } = require('electron');
const addDetailsRouter = require('../../models/addDetailsRouter.cjs');
const selectDetailsRouter = require('../../models/selectDetailsRouter.cjs');

function DBconnectIPC() {
    ipcMain.handle('DBConnect:addDetailsRouter', async (e, args) => {
        await addDetailsRouter(args);
    });

    ipcMain.handle('DBConnect:selectDetailsRouter', async () => {
        return selectDetailsRouter()
    });
}

module.exports = DBconnectIPC;