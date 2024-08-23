const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Error in the Service layer of create city");
      throw { error };
    }
  }
  async deleteCity(cityid) {
    try {
      const response = await this.cityRepository.deleteCity(cityid);
      return response;
    } catch (error) {
      console.log("Error in the service layer of delete city");
    }
  }
  async updateCity(cityid, data) {
    try {
      const city = await this.cityRepository.updateCity(cityid, data);
      return city;
    } catch (error) {
      console.log("Error in the service layer of update");
      throw { error };
    }
  }
  async getCity(cityid) {
    try {
      const city = await this.cityRepository.getCity(cityid);
      return city;
    } catch (error) {
      console.log("Error in the service layer of get city");
    }
  }
  async getAllCity(filter) {
    try {
      const cities = await this.cityRepository.getAllCity({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("Error from service layer of getAllCities");
      throw { error };
    }
  }
}

module.exports = CityService;
