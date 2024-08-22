const express = require("express");

const router = express.Router();

const CityController = require("../../controllers/city-controller");

router.post("/city", CityController.createCity);
router.delete("/city/:id", CityController.deleteCity);
router.get("/city/:id", CityController.getCity);
router.patch("/city/:id", CityController.updateCity);
router.get("/city", CityController.getAllCities);

module.exports = router;
