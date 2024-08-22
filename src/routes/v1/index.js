const express = require("express");

const router = express.Router();

const CityController = require("../../controllers/city-controller");

router.post("/city", CityController.createCity);

module.exports = router;
