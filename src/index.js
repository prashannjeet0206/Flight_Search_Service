const express = require("express");
const { PORT } = require("./config/server");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");

const setUpAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Listening to Port:${PORT}`);
  });
};

setUpAndStartServer();
