const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  servings: {
    type: Number,
    required: true,
  },
  prepTime: {
    type: String,
    required: true,
  },
  cookTime: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  servings: [
    {
      type: String,
      required: true,
    },
  ],
  notes: {
    type: String,
  },
  imageURL: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
