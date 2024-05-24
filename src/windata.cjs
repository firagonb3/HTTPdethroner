
const windata = {
    "winMain": {
        id: "winMain", 
        width: 402,
        height: 415,
        loadURL: true,
        loadFile: 'index.html',

        frame: true,
        transparent: false,
        maximizable: true,
        resizable: true,
        devtools: true

        // frame: false,
        // transparent: true,
        // maximizable: false,
        // resizable: false


    },
    "popUp": {
        id: "popUp",
        width: 200,
        height: 200,
        devtools: false,
        loadURL: "http://localhost:5173/",
        loadFile: 'src/public/ui/index.html'
    }
}
module.exports = windata;