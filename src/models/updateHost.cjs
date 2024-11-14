const DB = require('../utils/CommonJS/DB.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

async function updateHostPort({ Name, Port, Path, IndexFile = null, IndexFilesEnabled, IsActive }) {
    try {

        if (IndexFile === '') IndexFile = null;
        
        const init = await DB.init();
        logHandler.logToRenderer(typeLog.LOG, init)
        const res = await DB.update('Hosts', { Name: Name, Path: Path, Port: Port, IndexFile: IndexFile, IndexFilesEnabled: IndexFilesEnabled, IsActive: IsActive }).where('Port', Port).exec()
        logHandler.logToRenderer(typeLog.INFO, "Update Result: ", JSON.stringify(res, null, 2));
        logHandler.logToRenderer(typeLog.INFO, "Update successful");

    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error)
    } finally {
        const close = await DB.close();
        logHandler.logToRenderer(typeLog.LOG, close)
    }
}

module.exports = { updateHostPort };