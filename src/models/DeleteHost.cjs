const DB = require('../utils/CommonJS/DB.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

async function DeleteHost(Port) {
    try {
        const init = await DB.init();
        logHandler.logToRenderer(typeLog.LOG, init)
        const res = await DB.delete('Hosts').where('Port', Port).exec()
        //quiero los valores que contiene el res y los paso a la consola
        logHandler.logToRenderer(typeLog.INFO, "Delete Result: ", JSON.stringify(res, null, 2));
        logHandler.logToRenderer(typeLog.INFO, "Delete successful");

    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error)
    } finally {
        const close = await DB.close();
        logHandler.logToRenderer(typeLog.LOG, close)
    }
}

module.exports = { DeleteHost };