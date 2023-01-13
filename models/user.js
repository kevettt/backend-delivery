const db = require("../config/config");

const User = {};

User.create = (user, result) => {
  const sql = `
    insert into
      users(
        email,
        name,
        lastname,
        phone,
        image,
        password,
        created_at,
        updated_at
      )
    values(?,?,?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      user.email,
      user.name,
      user.lastname,
      user.phone,
      user.image,
      user.password,
      new Date(),
      new Date()
    ],
    (err,res) => {
      if(err){
        console.log("ERROR: ", err);
        result(err,null)
      }else{
        console.log("El id del usuario es :", res.insertId);
        result(null,res.insertId)
      }
    }
  )
}

module.exports = User;