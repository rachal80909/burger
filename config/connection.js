// * Inside the `connection.js`
// file, setup the code to connect Node to MySQL.

// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pandab3ar",
    database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

// mysql: //dpbtqi57lmacei5e:cm1do3rbe8ix9er4@l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/g8f93hq53wr3ecd5


//     if (process.env.JAWSDB_URL) {
//         connection = sql.createConnection(processs.env.JAWSDB_URL);
//     } else {
//         connectionmysql.createConnection({
//             host: "localhost",
//             user: "root",
//             password: "Pandab3ar"
//             database: "burgers_db"
//         })

//     }