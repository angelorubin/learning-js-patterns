require("dotenv").config();
const DbFactory = require("./db-factory/index");

const dbFactory = new DbFactory();

const mysqlConn = dbFactory.createConnection({
	type: process.env.MYSQL_TYPE,
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	database: process.env.MYSQL_DATABASE,
	user: process.env.MYSQL_DB_USER,
	password: process.env.MYSQL_ROOT_PASSWORD,
});

const mysqlDb = mysqlConn.connection();

mysqlDb.query("SELECT firstname FROM users", function (err, res) {
	if (err) {
		console.log(`ERROR: ${err}`);
	}
	console.log(`MySQL Data`, res);
});
