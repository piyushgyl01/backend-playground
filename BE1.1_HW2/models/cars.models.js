const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      typee: String,
      required: true,
    },
    year: {
      type: Number,
    },
    mileage: {
      type: Number,
    },
    fuelType: {
      type: String,
      enum: ["Gasoline", "Diesel", "Electric", "Hybrid"],
    },
    transmission: {
      type: String,
      enum: ["Automatic", "Manual"],
    },
    bodyStyle: {
      type: String,
    },
    color: {
      type: String,
    },
    isCertifiedPreOwned: {
      type: Boolean,
      default: false,
    },
    isFourWheelDrive: {
      type: Boolean,
      default: false,
    },
    isLuxury: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;