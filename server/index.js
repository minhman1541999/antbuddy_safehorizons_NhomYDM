const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

let port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Importing route
const adminsRoute = require("./api/routes/admins.route");
const customersRoute = require("./api/routes/customers.route");
const productsRoute = require("./api/routes/products.route");
const ordersRoute = require("./api/routes/orders.route");
adminsRoute(app);
customersRoute(app);
productsRoute(app);
ordersRoute(app);

app.listen(port, function () {
  console.log("Server running");
});

const db = require("./api/db");
db.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful connection!");
  }
});

exports = module.exports = app;