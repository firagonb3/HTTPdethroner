const express = require('express')
const vhostServer = require('./vhostServer.cjs')
const app = express()
const defaultApp = express()

let server;
let isRunning = false;

defaultApp.get('/', (req, res) => {
    res.send('Hello World!')
})

function startServer(port) {
    if (isRunning) {
        console.log("The server is already running")
        return;
    }

    vhostServer(app, [
        { hostname: 'host1.int', text: 'vhost 1' },
        { hostname: 'host2.int', text: 'vhost 2' }
    ])
    app.use(defaultApp)
    server = app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`);
        isRunning = true;
    })

}

function stopServer() {
    if (!isRunning) {
        console.log("There is no server to be closed.")
        return;
    }

    server.close(() => {
        console.log("The server has been stopped");
        isRunning = false;
    });
}


module.exports = { start: startServer, stop: stopServer };