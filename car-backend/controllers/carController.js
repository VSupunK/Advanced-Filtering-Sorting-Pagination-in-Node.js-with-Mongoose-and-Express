const { get } = require("mongoose");

const getAllCars = async (req, res) => {
  res.send("Hello all");
};

module.exports = getAllCars;
