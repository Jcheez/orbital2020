const router = require("express").Router();
const jwt = require("jsonwebtoken");

const validateRegistation = require("../models/registration");
const validateLogin = require("../models/authenticate");
const users = require("../models/usersModel");

router.post("/signup", (req, res) => {
  const { errors, validated } = validateRegistation(req.data);

  if (validated === false) {
    return res.status(400).json(errors);
  }

  users.find({ email: req.data.email }).then((email) => {
    if (email === true) {
      return res.status(400).json("This email has been taken by another user");
    } else {
      const newUser = new users({
        email: req.data.email,
        password: req.data.password,
      });
      newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, validated } = validateLogin(req.data);

  if (validated === false) {
    return res.status(400).json(errors);
  }

  const email = req.data.email;
  const password = req.data.password;

  users.find({ email }).then((user) => {
    if (user === false) {
      return res.status(400).json("Email not registered yet");
    }
    if (password === user.password) {
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
      return res.status(400).json("Incorrect password");
    }
  });
});

module.exports = router;
