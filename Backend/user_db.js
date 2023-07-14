var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var model = mongoose.model;

const mongooseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const users = model("Users", mongooseSchema);

module.exports = users;
