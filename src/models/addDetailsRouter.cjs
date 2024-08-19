const DB = require('../utils/CommonJS/DB.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

async function addDetailsRouter({ Name, Route, Port, IsActive }) {
    try {
        //const { Name, Route, Port, IsActive } = args
        const init = await DB.init();
        logHandler.logToRenderer(typeLog.INFO, init)

        logHandler.logToRenderer(typeLog.LOG, "Name: ", Name)
        logHandler.logToRenderer(typeLog.LOG, "Route: ", Route)
        logHandler.logToRenderer(typeLog.LOG, "Port: ", Port)
        logHandler.logToRenderer(typeLog.LOG, "IsActive: ", IsActive)

        const res = await DB.insert('DetailsRoute', { Name: Name, Route: Route, Port: Port, IsActive: IsActive }).exec()
        logHandler.logToRenderer(typeLog.INFO, "Insert DetailsRoute successful")
        logHandler.logToRenderer(typeLog.INFO, 'Insert data, changes: ', res.changes, 'lastID: ', res.lastID)

    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error)
    } finally {
        const close = await DB.close();
        logHandler.logToRenderer(typeLog.INFO, close)
    }
}

module.exports = addDetailsRouter;