const { dialog, ipcMain } = require('electron');

function openFileDialog() {
    ipcMain.handle('openFileDialog:selectFileWeb', async () => {
        const result = await dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'Web Files', extensions: ['html', 'tml', 'php'] },
                { name: 'All Files', extensions: ['*'] }
            ]
        });
        //console.log(result)
        if (!result.canceled) {
            return result.filePaths[0];
        }
    });
}

module.exports = openFileDialog;