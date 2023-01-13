const mysql = require("mysql2");
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'admin',
  database:'delivery'
});

db.connect((err) => {
  if(err) throw err;
  console.log('DATABASE CONNECTED SUCCESSFULL');
})

module.exports = db;