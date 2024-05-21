const express = require('express')
const vhost = require('vhost')

function vhostServer(server, virtualHost = []) {
    const app = server;

    virtualHost.map( host => {
        const vapp = express()
        vapp.get('/', (req, res) => {
            res.send(host.text)
        })
        app.use(vhost(host.hostname, vapp))
    });
}

module.exports = vhostServer;