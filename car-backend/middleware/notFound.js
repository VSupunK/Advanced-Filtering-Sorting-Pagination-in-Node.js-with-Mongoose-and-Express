const notFound = (req, res, next) => {
  res.status(404).send("Path not found");
};

module.exports = notFound;
