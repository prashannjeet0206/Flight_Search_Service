const { CityService } = require("../services/index");

const cityService = new CityService();

const createCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "City Created Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create City",
      err: error,
    });
  }
};

const deleteCity = async (req, res) => {
  try {
    const city = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      success: true,
      message: "City deleted",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete city",
      err: error,
    });
  }
};

const updateCity = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "City updated Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update city",
      err: error,
    });
  }
};

const getCity = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "List of all cities",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch list of cities",
      err: error,
    });
  }
};

const getAllCities = async (req, res) => {
  try {
    const cities = await cityService.getAllCity();
    return res.status(200).json({
      data: cities,
      success: true,
      message: "List of all cities",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to fetch city list",
      err: error,
    });
  }
};

module.exports = { createCity, getCity, updateCity, deleteCity, getAllCities };
