const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'node-db',
    user: 'root',
    password: 'root',
    database:'nodedb'
});

const query = (sql, callBack) => {
  return connection.query(sql, callBack);
};

module.exports = {
  connection,
  query,
};