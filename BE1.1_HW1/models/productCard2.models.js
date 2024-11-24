const mongoose = require("mongoose");

const ProductCard2Schema = new mongoose.Schema({
  productName: String,
  productRating: String,
  productReviews: String,
  productFeatures: [
    {
      type: String,
    },
  ],
  price: Number,
  isFreeDelivery: Boolean,
  isLowestPriceSinceLaunch: Boolean,
  qtyLeft: Number,
});

const ProductCard2 = mongoose.model("ProductCard2", ProductCard2Schema);

module.exports = ProductCard2;
