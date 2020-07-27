var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '172.18.0.1',
  user     : 'nishanth',
  password : 'Nishanth#1',
  database : 'data',
  port     : '8080'
});

connection.connect((error) => {
  console.log(error);
  
  if(error) throw error;
  console.log("Connected to database.");
});

exports.get_users = (callback) => {
  var sql = "SELECT name from users";

  connection.query(sql, (error, records) => {
    if (error) throw error;
    return callback(records);
  });
}

exports.add_user = (callback) => {
  var sql = "INSERT INTO users (name, password, score) VALUES ?";
  
  connection.query(sql, [inputs], function (error, records) {
    if (error) throw error;
    return callback(records)
  });
}

exports.add_table = (callback) => {
  var sql = "create table users (id int AUTO_INCREMENT primary key, \
                                 name VARCHAR(255) NOT NULL, \
                                 password VARCHAR(255) NOT NULL, \
                                 score INT NOT NULL)";
  
  connection.query(sql, function (error, records) {
    if (error) throw error;
    return callback(records)
  });
}