const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");
app.use(passport.initialize());
require("./routes/passport")(passport);
app.use("/users", usersRouter);

const currenciesRouter = require("./routes/currencies");
app.use("/currencies", currenciesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
