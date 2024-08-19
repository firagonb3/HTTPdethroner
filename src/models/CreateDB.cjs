const DB = require('../utils/CommonJS/DB.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

async function CreateDB() {
    try {
        const init = await DB.init();
        logHandler.logToRenderer(typeLog.INFO, init)

        logHandler.logToRenderer(typeLog.INFO, 'Create database.')
        await DB.executeQuery(`
            CREATE TABLE IF NOT EXISTS "DetailsRoute" (
                "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
                "Name" TEXT NOT NULL UNIQUE,
                "Route" TEXT NOT NULL,
                "Port" INTEGER NOT NULL UNIQUE, 
                "IsActive" BOOLEAN NOT NULL DEFAULT 1
            );
        `);

    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error)
    } finally {
        const close = await DB.close();
        logHandler.logToRenderer(typeLog.INFO, close)
    }
}


module.exports = CreateDB;