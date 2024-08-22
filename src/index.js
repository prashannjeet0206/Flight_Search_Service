const express = require("express");
const { PORT } = require("./config/server");
const bodyParser = require("body-parser");

const setUpAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Listening to Port:${PORT}`);
  });
};

setUpAndStartServer();
