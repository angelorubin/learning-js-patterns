require("dotenv").config();
const DbFactory = require("./db-conn-factory/index");

const dbFactory = new DbFactory();

const pgConn = dbFactory.createConnection({
  type: process.env.PG_TYPE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

const pgDb = pgConn.connection();

pgDb.query("SELECT * FROM users", function (err, res) {
  if (err) {
    console.log(`ERROR: ${err}`);
  }
  console.log(`Postgres Data`, res.rows[0]);
});
