const { BrowserWindow } = require('electron/main');
const isDev = require('../../utils/CommonJS/isDev.cjs');
const path = require('node:path');

function createWindow() {
    /* const win = new BrowserWindow({
         frame: true,
         transparent: false,
         maximizable: true,
         resizable: true,
         width: 800,
         height: 600,
         webPreferences: {
             nodeIntegration: true,
             enableRemoteModule: true,
             preload: path.join(__dirname, 'preload.js')
         }
     });
 
 
 
     //win.loadFile('src/public/ui/index.html');
     win.loadURL('http://localhost:5173/');
 
     /*win.webContents.on('dom-ready', () => {
         // Ejecutar código JavaScript en la página web cargada para obtener el tamaño del contenido
         win.webContents.executeJavaScript(`
             {
                 const body = document.body;
                 const html = document.documentElement;
                 const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                 const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
                 [width, height];
             }
         `).then(contentSize => {
             // Ajustar el tamaño de la ventana al tamaño del contenido
             win.setSize(contentSize[0], contentSize[1]);
         }).catch(error => {
             console.error('Error al obtener el tamaño del contenido HTML:', error);
         });
     });*/

    return self
}

const window = {
    init(config) {
        const win = new BrowserWindow({
            x: config?.x || undefined,
            y: config?.y || undefined,
            width: config?.width || 800,
            height: config?.height || 600,
            frame: config?.frame !== undefined ? config.frame : isDev,
            transparent: config?.transparent !== undefined ? config.transparent : (isDev ? false : true),
            maximizable: config?.maximizable !== undefined ? config.maximizable : isDev,
            resizable: config?.resizable !== undefined ? config.resizable : isDev,
            webPreferences: {
                nodeIntegration: true,
                preload: path.join(__dirname, 'preload.cjs'),
            },
        });

        if (isDev && config?.loadURL) {
            win.loadURL(config.loadURL);
        } else {
            win.loadFile(config.loadFile);
        }

        if (config?.devtools ?? false) {
            win.webContents.openDevTools();
        }

        //win.id = config?.id || 'main-window';


        return win;
    }
};

module.exports = window;