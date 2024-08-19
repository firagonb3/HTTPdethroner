const DB = require('../utils/CommonJS/DB.cjs')
const { logHandler, typeLog } = require('../controllers/logManagement/logHandler.cjs')

async function selectDetailsRouter() {
    try {
        //const { Name, Route, Port, IsActive } = args
        const init = await DB.init();
        logHandler.logToRenderer(typeLog.LOG, init);

        const res = await DB.select('DetailsRoute', '*').exec();
        
        res.map((v) => {
            logHandler.logToRenderer(
                typeLog.INFO, '\n', 
                '                      ID: ', v.ID,      '\n',
                '                      Name: ', v.Name,  '\n',
                '                      Port: ', v.Port,  '\n',
                '                      Port: ', v.Route, '\n'
            );
        });

        console.log(res[0])
        return res;

    } catch (error) {
        logHandler.logToRenderer(typeLog.ERROR, error);
    } finally {
        const close = await DB.close();
        logHandler.logToRenderer(typeLog.LOG, close);
    }
}

module.exports = selectDetailsRouter;