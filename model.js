const mongoose = require("mongoose");

//const invoice = require("../model/invoice").schema;
const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
})


module.exports = mongoose.model("user", userSchema);
