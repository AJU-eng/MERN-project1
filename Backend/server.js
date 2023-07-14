var express = require("express");
var cors = require("cors");
var users = require("./user_db");
var app = express();
var db = require("mongoose");

db.connect("mongodb://localhost:27017/Register")
  .then(() => {
    console.log("Database loaded...");
  })
  .catch(() => {
    console.log("not connected");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {});

app.post("/Signup", async (req, res) => {
  const { name, email, password } = req.body;

  const data = {
    name: name,
    email: email,
    password: password,
  };

  const check = await users.collection.insertMany([data]);

  if (check) {
    res.json("inserted");
    console.log("data inserted");
  } else {
    res.json("not exist");
    console.log("not exist");
  }
});

app.post("/getUser", (req, res) => {
  users.find({}).then((usersdata) => res.json(usersdata));
});

app.get("/getData/:id", (req, res) => {
  const id = req.params.id;
  users.findById({ _id: id }).then((users) => res.json(users));
});

app.put("/updateData/:id", (req, res) => {
  const id = req.params.id;
  users
    .findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, email: req.body.email }
    )
    .then((data) => res.json(data));
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  const check = await users.collection.findOne({
    email: email,
    password: password,
  });

  if (check) {
    res.json("exist");
    console.log("User exist");
  } else {
    res.json("not exist");
    console.log("not exist");
  }
});

app.post("/hello", async (req, res) => {
  const { email, password } = req.body;

  const check = await use.collection.findOne({
    name: email,
    password: password,
  });

  if (check) {
    res.json("exist");
    console.log("User exist");
  } else {
    res.json("not exist");
    console.log("not exist");
  }
});

app.listen(7000, () => {});
