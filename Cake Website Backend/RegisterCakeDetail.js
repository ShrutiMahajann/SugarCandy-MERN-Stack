const mongoose = require("mongoose");

const RegistersSchema = new mongoose.Schema(
  {
    fname: String,
    email: String,
    password: String,
    contact: String,
  },
  {
    collection: "registercakedetail",
  }
);

module.exports = mongoose.model(
  "registercakedetail",
  RegistersSchema
);