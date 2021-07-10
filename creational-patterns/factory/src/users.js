require("dotenv").config();
const DbFactory = require("./utils/DbFactory");

const dbFactory = new DbFactory();

const mysqlConn = dbFactory.createConnection({
	type: "mysql",
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	database: process.env.MYSQL_DATABASE,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_ROOT_PASSWORD,
});

const mysqlDb = mysqlConn.connection();

mysqlDb.query("SELECT * FROM users", function (err, res) {
	if (err) {
		console.log(`ERROR: ${err}`);
	}
	console.log(`Dados vindos do MySQL`, res);
});
