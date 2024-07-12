
const windata = {
    "winMain": {
        id: "winMain", 
        width: 1000,
        height: 600,
        loadURL: true,
        loadFile: 'winMain/index.html',

        frame: true,
        transparent: false,
        maximizable: true,
        resizable: true,
        devtools: true

        // frame: false,
        // transparent: true,
        // maximizable: false,
        // resizable: false,
        // devtools: false


    },
    "winLog": {
        id: "winLog",
        width: 1000,
        height: 600,
        loadURL: true,
        loadFile: 'winlog/index.html',

        // frame: true,
        // transparent: false,
        // maximizable: true,
        // resizable: true,
        // devtools: true

        frame: false,
        transparent: true,
        maximizable: false,
        resizable: false,
        devtools: false
    }
}
module.exports = windata;