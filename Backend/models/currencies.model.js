const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const currencySchema = new Schema({
  Date: { type: String, required: true },
  Bank: { type: String, required: true },
  Timestamp: { type: String, required: true },
  rates: { type: Object, required: true },
});

const currencies = mongoose.model("currencies", currencySchema); //currencies is the collection name

module.exports = currencies;
