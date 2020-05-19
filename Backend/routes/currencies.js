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

module.exports = router;
