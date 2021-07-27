const mysql_db = require("./mysql");
const pg_db = require("./postgres");

mysql_db.query("SELECT * FROM users", (err, res) => {
	if (err) {
		console.log(`ERROR: ${err}`);
	}
	console.log(`MySQL Data`, res);
});

pg_db.query("SELECT * FROM users", (err, res) => {
	if (err) {
		console.dir(`ERROR: ${err}`);
	}
	console.dir(`Postgres Data`, res.rows[0]);
});
