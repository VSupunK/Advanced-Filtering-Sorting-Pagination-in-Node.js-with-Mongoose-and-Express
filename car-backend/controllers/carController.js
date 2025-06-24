const Car = require("../models/Car");

// const getAllCars = async (req, res) => {
//   res.send("Hello all");
// };

const getAllCars = async (req, res) => {
  const { featured, name } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (name) {
    queryObject.featured = { $regex: name, $options: "i" };
  }

  const cars = await Car.find(queryObject);
  res.status(200).json({ nbHits: cars.length, cars });
};

module.exports = getAllCars;
