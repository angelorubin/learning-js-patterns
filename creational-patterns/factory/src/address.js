const DbFactory = require("./utils/DbFactory");
require("dotenv").config();

const dbFactory = new DbFactory();

const pgConn = dbFactory.createConnection({
  type: "postgres",
  host: process.env.P_HOST,
  port: "5432",
  database: process.env.P_DATABASE,
  user: process.env.P_USER,
  password: process.env.P_PASSWORD,
});

const pgDb = pgConn.connection();

pgDb.query("SELECT * FROM users", function (err, res) {
  if (err) {
    console.log(`ERROR: ${err}`);
  }
  console.log(`Dados vindos do Postgres`, res.rows[0]);
});
