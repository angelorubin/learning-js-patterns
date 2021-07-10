require("dotenv").config();
const DbFactory = require("./utils/DbFactory");

const dbFactory = new DbFactory();

const pgConn = dbFactory.createConnection({
	type: "postgres",
	host: process.env.PG_HOST,
	port: "5432",
	database: "postgres-db",
	user: "postgres",
	password: "root",
});

const pgDb = pgConn.connection();

pgDb.query("SELECT * FROM users", function (err, res) {
	if (err) {
		console.log(`ERROR: ${err}`);
	}
	console.log(`Dados vindos do Postgres`, res.rows[0]);
});
