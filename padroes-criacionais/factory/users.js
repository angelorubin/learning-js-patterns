const DbConnectionFactory = require('./index')

const dbConnectionFactory = new DbConnectionFactory();

const mysqlConnection = dbConnectionFactory.createConnection({
	type: "mysql",
	host:"127.0.0.1",
	port: "3306",
	database:'test',
	user:"root",
	password:"root"
});

const postgresConnection = dbConnectionFactory.createConnection({
	type: "postgres",
});

const mysqlDb = mysqlConnection.connection()

mysqlDb.query("SELECT * FROM users", function (err, results, fields) {
	if(err){
		console.log(`ERROR: ${err.sqlMessage}`)
	}
	console.log(results)
})
