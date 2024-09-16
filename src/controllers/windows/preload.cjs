const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('HTTPserver', {
    httpStart: () => ipcRenderer.invoke('http:start'),
    httpRestart: () => ipcRenderer.invoke('http:restart'),
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

contextBridge.exposeInMainWorld('filePickerDialog', {
    getFileAndPathWeb: () => ipcRenderer.invoke('filePickerDialog:getFileAndPathWeb'),
    getPathWeb: () => ipcRenderer.invoke('filePickerDialog:getPathWeb')
});

contextBridge.exposeInMainWorld('DBConnect', {
    addHost: (args) => ipcRenderer.invoke('DBConnect:addHost', args),
    selectHosts: () => ipcRenderer.invoke('DBConnect:selectHosts')
});
