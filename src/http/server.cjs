const express = require('express')
const vhostServer = require('./vhostServer.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

const app = express()
const defaultApp = express()

let server;
let isRunning = false;

defaultApp.get('/', (req, res) => {
    res.send('Hello World!');
});

async function startServer(port) {
    try {
        if (isRunning) {
            logHandler.logToRenderer(typeLog.WARNING, "The server is already running")
            return;
        }

        vhostServer(app, [
            { hostname: 'host1.int', text: 'vhost 1' },
            { hostname: 'host2.int', text: 'vhost 2' }
        ]);
        app.use(defaultApp);
        server = app.listen(port, () => {
            logHandler.logToRenderer(typeLog.INFO, `Listening on http://localhost:${port}`);
            isRunning = true;
        });
    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error);
    }
}

async function stopServer() {
    try {
        if (!isRunning) {
            logHandler.logToRenderer(typeLog.WARNING, "There is no server to be closed.");
            return;
        }

        server.close(() => {
            console.log();
            logHandler.logToRenderer(typeLog.INFO, "The server has been stopped");
            isRunning = false;
        });
    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error);
    }
    
}


module.exports = { start: startServer, stop: stopServer };