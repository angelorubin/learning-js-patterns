const DbFactory = require("./utils/DbFactory");

const dbFactory = new DbFactory();

const pgConnection = dbFactory.createConnection({
	type: "postgres",
	host: "127.0.0.1",
	port: "5432",
	database: "postgres-db",
	user: "postgres",
	password: "root",
});

const pgConn = dbFactory.createConnection({
	...pgConnection,
});

const pgDb = pgConn.connection();

pgDb.query("SELECT * FROM users", function (err, res) {
	if (err) {
		console.log(`ERROR: ${err}`);
	}
	console.log(`Dados vindos do Postgres`, res.rows[0]);
});
