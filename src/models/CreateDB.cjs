const DB = require('../utils/CommonJS/DB.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

async function CreateDB() {
    try {
        const init = await DB.init();
        logHandler.logToRenderer(typeLog.LOG, init)

        logHandler.logToRenderer(typeLog.INFO, 'Create database.')
        await DB.executeQuery(`
            CREATE TABLE IF NOT EXISTS "Hosts" (
                "Name" TEXT NOT NULL UNIQUE,
                "Port" INTEGER NOT NULL PRIMARY KEY, 
                "Path" TEXT NOT NULL,
                "IndexFile" TEXT,
                "IndexFilesEnabled" BOOLEAN NOT NULL DEFAULT 1,
                "IsActive" BOOLEAN NOT NULL DEFAULT 1
            );
        `);
        
        await DB.executeQuery(`
            CREATE TABLE IF NOT EXISTS "VirtualHosts" (
                "Port" INTEGER NOT NULL,
                "Hostname" TEXT NOT NULL,
                "Path" TEXT NOT NULL,
                "IndexFile" TEXT,
                "IndexFilesEnabled" BOOLEAN NOT NULL DEFAULT 1,
                "IsActive" BOOLEAN NOT NULL DEFAULT 1,
                FOREIGN KEY ("Port") REFERENCES "Hosts"("Port") ON DELETE CASCADE
            );
        `);

    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error)
    } finally {
        const close = await DB.close();
        logHandler.logToRenderer(typeLog.LOG, close)
    }
}


module.exports = CreateDB;