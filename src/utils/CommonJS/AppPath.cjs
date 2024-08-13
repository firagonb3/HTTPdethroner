const { app } = require('electron/main');
const isDev = require('./isDev.cjs');
const AppPath = !isDev ? path.dirname(app.getAppPath(), '..', '..') : app.getAppPath()
module.exports = AppPath;