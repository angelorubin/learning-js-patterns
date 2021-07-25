require("dotenv").config();
const DbConnFactory = require("./db-conn-factory/index");

const dbConnFactory = new DbConnFactory();

const mysqlConn = dbConnFactory.createConnection({
  type: process.env.MYSQL_TYPE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
});

const mysqlDB = mysqlConn.connection();

mysqlDB.query("SELECT id FROM users", function (err, res) {
  if (err) {
    console.log(`ERROR: ${err}`);
  }
  console.log(`MySQL Data`, res);
});
