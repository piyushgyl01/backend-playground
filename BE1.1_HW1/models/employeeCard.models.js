const mongoose = require("mongoose");

const EmployeeCardSchema = new mongoose.Schema({
  name: String,
  position: String,
  id: Number,
  dob: String,
  mail: String,
  tellNo: Number,
  address: String,
});

const EmployeeCard = mongoose.model("EmployeeCard", EmployeeCardSchema);

module.exports = EmployeeCard;
