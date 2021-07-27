require("custom-env").env("my");
const DbConnFactory = require("./db-conn-factory/index");

const dbConnFactory = new DbConnFactory();

const mysqlConn = dbConnFactory.createConnection({
	type: process.env.MYSQL_TYPE,
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	database: process.env.MYSQL_DATABASE,
	user: process.env.MYSQL_DB_USER,
	password: process.env.MYSQL_DB_PASSWORD,
});

const mysql_db = mysqlConn.connection();

module.exports = mysql_db;
