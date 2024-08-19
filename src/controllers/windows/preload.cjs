const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('HTTPserver', {
    httpStart: arg1 => ipcRenderer.invoke('http:start', arg1),
    httpRestart: arg1 => ipcRenderer.invoke('http:restart', arg1),
    httpStop: () => ipcRenderer.invoke('http:stop')
})

contextBridge.exposeInMainWorld('RemoteControl', {
    close: arg1 => ipcRenderer.invoke('remote:close', arg1),
    minimizer: arg1 => ipcRenderer.invoke('remote:minimizer', arg1),
})

contextBridge.exposeInMainWorld('logMessage', {
    onLogMessage: (callback) => ipcRenderer.on('logMessage', (event, ...args) => callback(...args)),
});

contextBridge.exposeInMainWorld('newWindow', {
    addWin: (arg1, arg2) => ipcRenderer.invoke('newWindow:add', arg1, arg2)
});

contextBridge.exposeInMainWorld('openFileDialog', {
    selectFileDialog: () => ipcRenderer.invoke('openFileDialog:selectFileWeb')
});

contextBridge.exposeInMainWorld('DBConnect', {
    addDetailsRouter: (args) => ipcRenderer.invoke('DBConnect:addDetailsRouter', args),
    selectDetailsRouter: () => ipcRenderer.invoke('DBConnect:selectDetailsRouter')
});
