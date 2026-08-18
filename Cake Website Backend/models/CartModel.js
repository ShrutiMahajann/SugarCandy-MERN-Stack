const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
{
  userId: String,
  productId: Number,
  name: String,
  price: Number,
  image: String,
  weight: String,
  qty: {
    type: Number,
    default: 1
  }
},
{
  collection: "cartdetails"
}
);

module.exports = mongoose.model(
  "Cart",
  CartSchema
);