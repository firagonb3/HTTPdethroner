const DB = require('../utils/CommonJS/DB.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

async function CreateDB() {
    try {
        const init = await DB.init();
        logHandler.logToRenderer(typeLog.LOG, init)

        logHandler.logToRenderer(typeLog.INFO, 'Create database.')
        await DB.executeQuery(`
            CREATE TABLE IF NOT EXISTS "Hosts" (
                "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
                "Name" TEXT NOT NULL UNIQUE,
                "Port" INTEGER NOT NULL UNIQUE,
                "Path" TEXT NOT NULL,
                "IndexFile" TEXT,
                "IndexFilesEnabled" BOOLEAN NOT NULL DEFAULT 1,
                "IsActive" BOOLEAN NOT NULL DEFAULT 1
            );
        `);
        
        await DB.executeQuery(`
            CREATE TABLE IF NOT EXISTS "VirtualHosts" (
                "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
                "HostID" INTEGER NOT NULL,
                "Hostname" TEXT NOT NULL,
                "Path" TEXT NOT NULL,
                "IndexFile" TEXT,
                "IndexFilesEnabled" BOOLEAN NOT NULL DEFAULT 1,
                "IsActive" BOOLEAN NOT NULL DEFAULT 1,
                FOREIGN KEY ("HostID") REFERENCES "Hosts"("ID") ON DELETE CASCADE
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