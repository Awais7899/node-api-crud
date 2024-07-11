const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const ProductRoute = require("./routes/product.route");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Helllo worldddddd");
});
app.use("/api", ProductRoute);

mongoose
  .connect(
    "mongodb+srv://awaisahmad:iW23X3mSwK68I2yX@cluster0.6zkkke7.mongodb.net/Node-Crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
