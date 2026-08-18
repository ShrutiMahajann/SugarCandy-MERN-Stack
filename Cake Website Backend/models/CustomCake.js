const mongoose = require("mongoose");

const customCakeSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  flavor: {
    type: String,
    required: true
  },

  weight: {
    type: String,
    required: true
  },

  candle: {
    type: String,
    default: ""
  },

  designType: {
    type: String,
    default: ""
  },

  addons: {
    type: [String],
    default: []
  },

  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },

  date: {
    type: String,
    required: true
  },

  message: {
    type: String,
    required: true
  },

  image: {
    type: String,
    default: ""
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  "CustomCake",
  customCakeSchema
);