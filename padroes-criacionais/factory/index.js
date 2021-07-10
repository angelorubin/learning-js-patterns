const mysql = require("mysql2");

/*
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
*/


class MySql {
	constructor({ type, host, port, database, user, password }) {
		this.type = type,
		this.host = host;
		this.port = port;
		this.database = database;
		this.user = user;
		this.password = password;
	}

	connection(){
		return mysql.createConnection({
			host: this.host,
			port: this.port,
			database: this.database,
			user: this.user,
			password: this.password,
		});
	}
}

class Postgres {
	constructor({ type, host, port, database, user, password }) {
		this.type = type,
		this.host = host;
		this.port = port;
		this.database = database;
		this.user = user;
		this.password = password;
	}
}

class DbConnectionFactory {
	createConnection(options) {
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

module.exports = DbConnectionFactory
