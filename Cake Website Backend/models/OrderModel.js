const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

  customer: {
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    pincode: String
  },

  items: Array,

  total: Number,

  paymentMethod: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  "Order",
  OrderSchema
);