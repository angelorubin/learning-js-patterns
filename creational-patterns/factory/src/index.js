const mysql_db = require("./mysql");
const pg_db = require("./postgres");

// TO-DO
// Criar tabela users no banco MySQL
// Inserir dados na tabela users no banco MySQL

mysql_db.query("SELECT * FROM users", (err, res) => {
	if (err) {
		console.log(`ERROR: ${err}`);
	}
	console.log(`MySQL Data`, res);
});

// TO-DO
// Criar tabela users no banco PostgreSQL
// Inserir dados na tabela users no banco PostgreSQL

pg_db.query("SELECT * FROM users", (err, res) => {
	if (err) {
		console.log(`ERROR: ${err}`);
	}
	console.log(`Postgres Data`, res.rows[0]);
});
