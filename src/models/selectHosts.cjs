const DB = require('../utils/CommonJS/DB.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

async function selectHosts() {
    try {
        //const { Name, Route, Port, IsActive } = args
        const init = await DB.init();
        logHandler.logToRenderer(typeLog.LOG, init);

        const res = await DB.select('Hosts', '*').exec();

        if (res.length !== 0) {
            logHandler.logToRenderer(typeLog.INFO, 'Data Recovery: Data found.');
            res.forEach((v) => {
                logHandler.logToRenderer(
                    typeLog.INFO, '\n',
                    '                      ID: ', v.ID, '\n',
                    '                      Name: ', v.Name, '\n',
                    '                      Port: ', v.Port, '\n',
                    '                      Path: ', v.Path, '\n'
                );
            });
        } else {
            logHandler.logToRenderer(typeLog.INFO, 'Data Recovery: No data available.');
        }
        
        return res;

    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error);
    } finally {
        const close = await DB.close();
        logHandler.logToRenderer(typeLog.LOG, close);
    }
}

module.exports = selectHosts;