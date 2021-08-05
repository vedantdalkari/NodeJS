const { query } = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vedant',
  database: 'iacsdedacmay21'
});
connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("mysql is connected");
  }
});

module.exports = connection;
