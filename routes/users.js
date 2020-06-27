const router = require("express").Router();
const jwt = require("jsonwebtoken");

const validateRegistation = require("../models/registration");
const validateLogin = require("../models/authenticate");
const users = require("../models/usersModel");

router.post("/signup", (req, res) => {
  const { errors, validated } = validateRegistation(req.body);

  if (validated === false) {
    return res.status(400).json(errors);
  }

  users.find({ email: req.body.email }).then((user) => {
    if (user[0]) {
      errors.email = "This email has been taken by another user";
      return res.status(400).json(errors);
    } else {
      const newUser = new users({
        email: req.body.email,
        password: req.body.password,
        favourites: [],
      });
      newUser
        .save()
        .then(() => res.json("User added"))
        .catch((err) => console.log(err));
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, validated } = validateLogin(req.body);

  if (validated === false) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  users
    .find({ email })
    .then((user) => {
      if (!user) {
        errors.email1 = "Email not registered yet";
        return res.status(400).json(errors);
      }
      if (email === user[0].email && password === user[0].password) {
        const payload = {
          id: user.id,
          email: user.email,
        };
        jwt.sign(payload, "secret", { expiresIn: 86400 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        });
      } else {
        errors.password1 = "Incorrect email or password combination";
        return res.status(400).json(errors);
      }
    })
    .catch((err) => console.log(err));
});

router.route("/user").get((req, res) => {
  users
    .find({}, { email: 1, favourites: 1, _id: 0 })
    .then((c) => res.json(c))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/userupdatefav", (req, res) => {
  const email = req.body.email;
  const fav = req.body.favourites;

  users.findOneAndUpdate({ email }, { $push: { favourites: fav } }, function (
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/userdeletefav", (req, res) => {
  const email = req.body.email;
  const fav = req.body.favourites;

  users.findOneAndUpdate({ email }, { $pull: { favourites: fav } }, function (
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
