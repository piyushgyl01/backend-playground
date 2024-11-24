const mongoose = require("mongoose");

const ProductCardSchema = new mongoose.Schema({
  productName: String,
  productType: String,
  productImageURL: String,
  productInfo: String,
  productColor: [
    {
      type: String,
      enum: ["Blue", "Red", "Green", "Black"],
    },
  ],
  size: {
    type: Number,
    min: 7,
    max: 11,
    default: 9,
  },
  price: Number,
});

const ProductCard = mongoose.model("ProductCard", ProductCardSchema);

module.exports = ProductCard;