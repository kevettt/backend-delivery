const mysql = require("mysql2");
const db = mysql.createConnection({
  host:'bmekeumm0zygz0hola9e-mysql.services.clever-cloud.com',
  user:'umrgairhrusdxzus',
  password:'2fCeKnF6vu2O03nbYwBF',
  database:'bmekeumm0zygz0hola9e'
});

db.connect((err) => {
  if(err) throw err;
  console.log('DATABASE CONNECTED SUCCESSFULL');
})

module.exports = db;