const mysql = require("mysql");

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test',
});

const checkConnection = () => {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log("連接資料庫時發生錯誤：", err);
        } else {
            console.log("連接成功");
        }
    });
};

module.exports = { pool, checkConnection };
