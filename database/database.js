const mysql = require("mysql2");

const pool = mysql.createPool({
  multipleStatements: true,
  connectTimeout: 30000,
  debug: false,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 10,
  host: "localhost", // Replace with your host name
  user: "root", //'igans',      // Replace with your database username
  password: "password", //'yjxq37zwfPkbep4heen2',      // Replace with your database password
  database: "zain", // Replace with your database Name
});

const runQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        console.error("CONNECTION error: ", err);
      } else {
        connection.query(query, params, function (err, rows) {
          if (err) {
            console.error(err);
          }
          if (err) {
            return reject(err);
          }
          return resolve(rows);
        });
        // Don't forget to release the connection when finished!
        pool.releaseConnection(connection);
      }
    });
  });
};

module.exports = { runQuery, connection: pool };