// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
    	port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

connection.connect();
module.exports = connection;