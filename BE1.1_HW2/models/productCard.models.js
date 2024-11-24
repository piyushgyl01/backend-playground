const mongoose = require("mongoose");

const ProductCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
  },
  discount: {
    type: String,
  },
  offers: [
    {
      type: String,
    },
  ],
  warranty: {
    type: String,
  },
  variants: [
    {
      type: String,
    },
  ],
  wifiConnectivity: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Product = mongoose.model("Product", ProductCardSchema);

module.exports = Product;
