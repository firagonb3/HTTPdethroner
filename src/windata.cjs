
const windata = {
    "winMain": {
        id: "winMain", 
        width: 1000,
        height: 430,

        // width: 410,
        // height: 430,

        loadURL: true,
        loadFile: 'winMain/index.html',

        resizableCSS: false,

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
        height: 430,
        loadURL: true,
        loadFile: 'winlog/index.html',

        resizableCSS: true,

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