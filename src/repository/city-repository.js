const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("error in repository layer");
      throw { error };
    }
  }

  async deleteCity(cityid) {
    try {
      await City.destroy({
        where: {
          id: cityid,
        },
      });
      return "City Deleted";
    } catch (error) {
      console.log("error in repository layer");
      throw { error };
    }
  }

  async updateCity(cityid, data) {
    try {
      // const city = await City.update(data, { where: { id: cityid } });
      const city = await City.findByPk(cityid);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Error in the repository layer");
      throw { error };
    }
  }

  async getCity(cityid) {
    try {
      const city = await City.findByPk(cityid);
      return city;
    } catch (error) {
      console.log("Error in Repository Layer");
      throw { error };
    }
  }

  async getAllCity(filter) {
    try {
      if (filter.name) {
        const city = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return city;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Error in city repo layer of getAllCity");
      throw { error };
    }
  }
}

module.exports = CityRepository;
