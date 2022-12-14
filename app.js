const express = require("express");

const app = express();

const port = 5000;

app.set("port", port);

app.get("/", (req, res) => {
  console.log('you are in')
  res.send(`Hello world! your port is :${port}`);
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;