const router = require("express").Router();
let currencies = require("../models/currencies.model");

router.route("/USD").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: { $or: [{ "rates.0.k": "USD" }, { "rates.0.k": "US Dollar" }] },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/EUR").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: { $or: [{ "rates.0.k": "Euro" }, { "rates.0.k": "EUR" }] },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/GBP").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "Sterling Pound" }, { "rates.0.k": "GBP" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/JPY").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "Japanese Yen" }, { "rates.0.k": "JPY" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/CNY").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [
            { "rates.0.k": "Chinese Renminbi" },
            { "rates.0.k": "CNY not found" },
          ],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/AUD").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "Australian Dollar" }, { "rates.0.k": "AUD" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/CAD").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "Canadian Dollar" }, { "rates.0.k": "CAD" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/NZD").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "New Zealand Dollar" }, { "rates.0.k": "NZD" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/HKD").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "Hong Kong Dollar" }, { "rates.0.k": "HKD" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/CHF").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "Swiss Franc" }, { "rates.0.k": "CHF" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/MYR").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [
            { "rates.0.k": "Malaysian Ringgit not found" },
            { "rates.0.k": "MYR" },
          ],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/IDR").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [
            { "rates.0.k": "Indonesian Rupiah" },
            { "rates.0.k": "IDR" },
            { "rates.0.k": "IDR not found" },
          ],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/THB").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "Thai Baht" }, { "rates.0.k": "THB" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/KRW").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "Korean Won" }, { "rates.0.k": "KRW" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/NTD").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [
            { "rates.0.k": "New Taiwan Dollar" },
            { "rates.0.k": "NTD not found" },
          ],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/AED").get((req, res) => {
  currencies
    .aggregate([
      { $unwind: "$rates" },
      {
        $project: {
          rates: { $objectToArray: "$rates" },
          Date: 1,
          Bank: 1,
          Timestamp: 1,
        },
      },
      {
        $match: {
          $or: [{ "rates.0.k": "UAE Dirham" }, { "rates.0.k": "AED" }],
        },
      },
    ])
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
