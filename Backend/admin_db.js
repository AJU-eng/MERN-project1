var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var model = mongoose.model;

const mongooseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const use = model("admin", mongooseSchema);

module.exports = use;
