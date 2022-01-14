"use strict";
const db = require("../db");
const jwt = require("jsonwebtoken");

module.exports = {
  login: (req, res) => {
    let data = req.body;
    let sql = "SELECT * FROM admin where username = ? and password = ?";
    db.query(sql, [data.username, data.password], (err, response) => {
      if (err) {
        res.json({ status: "ERROR IN QUERY", message: "Error in login" });
      } else {
        if (response.length > 0) {
          const token = jwt.sign({ id: response.id }, "secrect", {
            expiresIn: 60 * 60 * 24,
          });

          res.status(200).json({
            code: 200,
            token,
            user: {
              username: response[0].username,
              name: response[0].name,
              level: response[0].level,
            },
          });
        } else {
          res.status(200).json({
            code: 404,
            message: "Account or password is wrong",
          });
        }
      }
    });
  },
};
