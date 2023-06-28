// 引入mysql
const mysql = require("mysql");

// 建立一个连接池
const db = mysql.createPool({
    host: "127.0.0.1", // 数据库的IP地址(本地的或者是云服务器的都可以)
    user: "root",
    password: "Qq1337386019",
    database: "accountKeeping", //指定要操作哪个数据库
});

db.query("SELECT 1", (err, result) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("success connect mysql");
    }
})
//
// // 将文件暴露出去
export default db;
