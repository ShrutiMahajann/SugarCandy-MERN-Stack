const mongoose = require("mongoose");

const CakeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  rating: Number,
  image: String,
  category: String,

  weights: [
    {
      size: String,
      price: Number
    }
  ]
});

module.exports = mongoose.model(
  "Cake",
  CakeSchema,
  "cakes"
);