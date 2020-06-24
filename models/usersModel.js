const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  favourites: { type: Array, required: true },
});

const users = mongoose.model("users", userSchema); //users is the collection name

module.exports = users;
