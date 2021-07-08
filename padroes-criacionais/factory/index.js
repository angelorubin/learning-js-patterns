const mysql = require("mysql2");

const dbConnect = async () => {
	try {
		const connection = await mysql.createConnection({
			host: "127.0.0.1",
			port: "3306",
			user: "root",
			password: "root",
			database: "test",
		});

		// console.log("mysql connection success");

		connection.query("SELECT * FROM users", function (err, results, fields) {
			console.log(results);
		});
	} catch (error) {
		console.log(error);
	}
};

dbConnect();

/** 
class MySql {
	constructor({ url, user, password }) {
		this.url = url;
	}
}

class Postgres {
	constructor({ url, user, password }) {}
}

class DbConnectionFactory {
	createConnectionType(options) {
		switch (options.type) {
			case "mysql":
				return new MySql({ ...options });
				break;
			case "postgres":
				return new Postgres({ ...options });
				break;
		}
	}
}

const dbConnectionFactory = new DbConnectionFactory();

const mysqlConnection = dbConnectionFactory.createConnectionType({
	type: "mysql",
	url: "localhost:3000",
});

const postgresConnection = dbConnectionFactory.createConnectionType({
	type: "postgres",
});

// console.log(mysqlConnection);

*/
