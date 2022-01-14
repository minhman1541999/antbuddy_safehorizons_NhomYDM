"use strict";
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "man1541999",
  database: "northwind",
});

module.exports = db;
