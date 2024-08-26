const DB = require('../utils/CommonJS/DB.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

async function addHost({ Name, Path, Port, IsActive }) {
    try {
        //const { Name, Route, Port, IsActive } = args
        const init = await DB.init();
        logHandler.logToRenderer(typeLog.LOG, init)

        logHandler.logToRenderer(typeLog.INFO, "Name: ", Name)
        logHandler.logToRenderer(typeLog.INFO, "Route: ", Path)
        logHandler.logToRenderer(typeLog.INFO, "Port: ", Port)
        logHandler.logToRenderer(typeLog.INFO, "IsActive: ", IsActive)

        const res = await DB.insert('Hosts', { Name: Name, Path: Path, Port: Port, IsActive: IsActive }).exec()
        logHandler.logToRenderer(typeLog.INFO, "Insert DetailsRoute successful")
        logHandler.logToRenderer(typeLog.INFO, 'Insert data, changes: ', res.changes, 'lastID: ', res.lastID)

    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error)
    } finally {
        const close = await DB.close();
        logHandler.logToRenderer(typeLog.LOG, close)
    }
}

module.exports = addHost;