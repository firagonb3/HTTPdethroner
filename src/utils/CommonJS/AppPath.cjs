const { app } = require('electron/main');
const path = require('node:path');
const isDev = require('./isDev.cjs');
const AppPath = !isDev ? path.dirname(app.getAppPath(), '..', '..') : app.getAppPath()
module.exports = AppPath;