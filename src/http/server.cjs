const express = require('express');
const vhost = require('vhost')
const serveIndex = require('serve-index');
const path = require('node:path');

const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs');

const selectHosts = require('../models/selectHosts.cjs')

let server = [];
let isRunning = false;

async function startServer() {
    try {
        if (isRunning) {
            logHandler.logToRenderer(typeLog.WARNING, "The server is already running")
            return;
        }

        const datahost = await selectHosts();
        if (Object.keys(datahost).length === 0 === undefined) {
            logHandler.logToRenderer(typeLog.WARNING, "No data has been provided.");
            return;
        }

        datahost.map(v => {
            logHandler.logToRenderer(typeLog.INFO, v.Path, v.Port);
            if (!v.Path || !v.Port) throw new Error("path is not defined");
            if (v.IsActive) {
                const app = express();

                if (v.IndexFile !== null) {
                    app.get('/', (req, res, next) => {
                        res.sendFile(path.join(v.Path, v.IndexFile), (err) => {
                            if(err) {
                                logHandler.logToRenderer(typeLog.ERROR, err);
                                next(err);
                            }
                        });
                    });
                }

                app.use(express.static(v.Path));
                if (v.IndexFilesEnabled) app.use(serveIndex(v.Path, { icons: true }));

                app.use((err, req, res) => {
                    if (err.code === 'ENOENT') {
                        logHandler.logToRenderer(typeLog.ERROR, 'File not found');
                        res.status(404).send('File not found');
                    } else {
                        logHandler.logToRenderer(typeLog.ERROR, 'Internal server error');
                        res.status(500).send('Internal server error');
                    }
                });

                server.push(app.listen(v.Port, () => {
                    logHandler.logToRenderer(typeLog.INFO, `Server listening on http://localhost:${v.Port}`);
                }));
            }
        });
        isRunning = true;
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

        logHandler.logToRenderer(typeLog.INFO, "The server has been stopped");
        server.map(v => {
            v.close();
        });
        server = [];
        isRunning = false;
    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error);
    }
}


module.exports = { start: startServer, stop: stopServer };