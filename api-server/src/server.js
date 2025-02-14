"use-strict"
const express = require('express');
const app = express();
const port = 8080;
const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
  // const address = server.address();
  console.log(`Example app listening on port: ${port}`)
});
