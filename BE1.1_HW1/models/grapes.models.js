const mongoose = require("mongoose");

const GrapesSchema = new mongoose.Schema({
  description: String,
  calories: Number,
  carbs: Number,
  proteins: Number,
  Fat: Number,
});

const GrapesCard = mongoose.model("GrapesCard", GrapesSchema);

module.exports = GrapesCard;
