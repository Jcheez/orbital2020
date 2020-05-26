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
    console.log(user);
    if (user[0]) {
      return res.status(400).json("This email has been taken by another user");
    } else {
      const newUser = new users({
        email: req.body.email,
        password: req.body.password,
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

  users.find({ email }).then((user) => {
    if (!user) {
      return res.status(400).json("Email not registered yet");
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
      return res.status(400).json("Incorrect email or password combination");
    }
  });
});

module.exports = router;
