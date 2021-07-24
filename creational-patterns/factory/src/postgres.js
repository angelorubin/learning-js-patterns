require("dotenv").config();
const DbFactory = require("./db-factory/index");

const dbFactory = new DbFactory();

const pgConn = dbFactory.createConnection({
	type: process.env.PG_TYPE,
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.PG_DATABASE,
	user: process.env.PG_DB_USER,
	password: process.env.PG_DB_PASSWORD,
});

const pgDb = pgConn.connection();

pgDb.query("SELECT * FROM users", function (err, res) {
	if (err) {
		console.log(`ERROR: ${err}`);
	}
	console.log(`Postgres Data`, res.rows[0]);
});
