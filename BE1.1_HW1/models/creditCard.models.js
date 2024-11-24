const mongoose = require("mongoose");

const CreditCardSchema = new mongoose.Schema({
  bankName: String,
  creditCardNum: Number,
  expiryDate: Number,
  holderName: Number,
});

const CreditCard = mongoose.model("CreditCard", CreditCardSchema);

module.exports = CreditCard;
