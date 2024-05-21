const electron = require('electron');

if (typeof electron === 'string') {
    throw new TypeError('¡No se está ejecutando en un entorno de Electron!');
}

const { env } = process;
const isEnvSet = 'ELECTRON_IS_DEV' in env;
const getFromEnv = parseInt(env.ELECTRON_IS_DEV, 10) === 1;

const isDev = isEnvSet ? getFromEnv : !electron.app.isPackaged;

module.exports = isDev;

