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