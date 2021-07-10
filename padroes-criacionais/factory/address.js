const DbConnectionFactory = require('./index')

const dbConnectionFactory = new DbConnectionFactory();

const pConnection = dbConnectionFactory.createConnection({
	type: "postgres",
	host:"127.0.0.1",
	port: "5432",
	database:'adress',
	user:"postgres",
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
