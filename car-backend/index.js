require("express-async-errors");
require("dotenv").config();
const express = require("express");
const router = require("./routes/carsRoute");
const app = express();
const notFound = require("./middleware/notFound");
const dbConnect = require("./config/dbConnect");

app.use("/api/v1/cars", router);
app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    console.log("Connected to the database successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

start();
