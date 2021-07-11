require("dotenv").config();
const DbFactory = require("./utils/DbFactory");

const dbFactory = new DbFactory();

const mysqlConn = dbFactory.createConnection({
  type: "mysql",
  host: process.env.M_HOST,
  port: process.env.M_PORT,
  database: process.env.M_DATABASE,
  user: process.env.M_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
});

const mysqlDb = mysqlConn.connection();

mysqlDb.query("SELECT * FROM users", function (err, res) {
  if (err) {
    console.log(`ERROR: ${err}`);
  }
  console.log(`Dados vindos do MySQL`, res);
});
