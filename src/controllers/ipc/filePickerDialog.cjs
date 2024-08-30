const { dialog, ipcMain } = require('electron');
const path = require('path');

function filePickerDialog() {
    ipcMain.handle('filePickerDialog:getFileAndPathWeb', async () => {
        const result = await dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'Web Files', extensions: ['html', 'tml', 'php'] },
                { name: 'All Files', extensions: ['*'] }
            ]
        });

        if (!result.canceled && result.filePaths.length > 0) {
            const fullPath = result.filePaths[0];
            const fileName = path.basename(fullPath);
            const dirPath = path.dirname(fullPath);

            return {
                fullPath,
                fileName,
                dirPath
            };
        }
    });

    ipcMain.handle('filePickerDialog:getPathWeb', async () => {
        const result = await dialog.showOpenDialog({
            properties: ['openDirectory']
        });

        if (!result.canceled && result.filePaths.length > 0) {
            return result.filePaths[0];
        }
    });
}


module.exports = filePickerDialog;