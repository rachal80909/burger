// * Inside the `connection.js`
// file, setup the code to connect Node to MySQL.

// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = sql.createConnection(processs.env.JAWSDB_URL);
} else {
    connectionmysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Pandab3ar",
        database: "burgers_db"
    })

}

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;