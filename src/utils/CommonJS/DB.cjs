const sqlite3 = require('sqlite3').verbose();
const AppPath = require('./AppPath.cjs');
const path = require('node:path');

const DB = {
    fileDB: path.join(AppPath, 'app.db'),
    conn: null,
    queryStr: null,
    stmt: null,
    init: (fileDB = null) => {
        return new Promise((resolve, reject) => {
            if (fileDB !== null) {
                DB.conn = new sqlite3.Database(fileDB, (err) => {
                    if (err) reject(err);
                    else resolve('Database initializer');
                });
            } else {
                console.log(DB.fileDB)
                DB.conn = new sqlite3.Database(DB.fileDB, (err) => {
                    if (err) reject(err);
                    else resolve('Database initializer');
                });
            }
        });
    },
    close: () => {
        return new Promise((resolve, reject) => {
            DB.conn.close((err) => {
                if (err)  reject(err);
                else resolve('Database closed');
            });
        });
    },
    executeQuery: async (query = null) => {
        return new Promise((resolve, reject) => {
            DB.conn.run(query, [], (err, rows) => {
                if (err) reject(err);
                else resolve(this);
            });
        });
    },
    selectQuery: async (query = null) => {
        if (query !== null) {
            DB.queryStr = query;
        }

        return new Promise((resolve, reject) => {
            DB.conn.all(DB.queryStr, [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    },
    insert: (table, data) => {
        const keys = Object.keys(data).join(', ');
        const placeholders = Object.keys(data).map(() => '?').join(', ');
        const values = Object.values(data);
        DB.queryStr = `INSERT INTO ${table} (${keys}) VALUES (${placeholders})`;
        DB.stmt = { query: DB.queryStr, values: values };
        return DB;
    },
    select: (table, ...columns) => {
        DB.queryStr = `SELECT ${columns} FROM ${table}`;
        return DB;
    },
    update: (table, data) => {
        const setClause = Object.keys(data).map(key => `${key} = ?`).join(', ');
        const values = Object.values(data);
        DB.queryStr = `UPDATE ${table} SET ${setClause}`;
        DB.stmt = { query: DB.queryStr, values: values };
        return DB;
    },
    delete: (table) => {
        DB.queryStr = `DELETE FROM ${table}`;
        return DB;
    }, 
    where: (key, operator = null, value = null) => {

        if (value === null) {
            value = operator;
            operator = '==';
        }

        if (DB.queryStr.indexOf('WHERE') === -1) {
            DB.queryStr += ` WHERE ${key} ${operator} ${value}`;
        } else {
            DB.queryStr += ` AND ${key} ${operator} ${value}`;
        }
        if (DB.stmt) DB.stmt.query = DB.queryStr
        return DB;
    },
    exec: () => {
        if (DB.queryStr.indexOf('DELETE') !== -1) {
            DB.stmt = { query: DB.queryStr, values: [] };
        }

        if (DB.stmt) {
            const { query, values } = DB.stmt;
            return new Promise((resolve, reject) => {
                DB.conn.run(query, values, function (err) {
                    if (err) {
                        DB.stmt = null
                        reject(err);
                    } else {
                        DB.stmt = null
                        resolve(this);
                    }
                });
            });
        } else {
            DB.stmt = null
            return DB.selectQuery(DB.queryStr);
        }
    }
};

module.exports = DB;