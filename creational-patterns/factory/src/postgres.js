require("custom-env").env("pg");
const DbConnFactory = require("./db-conn-factory/index");

const dbConnFactory = new DbConnFactory();

const pgConn = dbConnFactory.createConnection({
	type: process.env.PG_TYPE,
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.POSTGRES_DB,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
});

const pg_db = pgConn.connection();

module.exports = pg_db;
