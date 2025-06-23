require("express-async-errors");
require("dotenv").config();
const express = require("express");
const router = require("./routes/carsRoute");
const app = express();
const notFound = require("./middleware/notFound");

app.use("/api/v1/cars", router);
app.use(notFound);

const port = process.env.PORT || 3000;
app.listen(port);
