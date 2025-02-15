/* global require, console */

"use strict";

const express = require("express");
const routes = require("./routes.js");

const protocol = "http";
const hostname = "127.0.0.1";
const port = 8080;

const app = express();
app.use("/", routes);

app.listen(port, hostname, () => {
  const msg = `Mock API Server listening on ${protocol}://${hostname}:${port}`;
  console.log(msg);
});
