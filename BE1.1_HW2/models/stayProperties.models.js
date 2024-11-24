const mongoose = require("mongoose");

const StayPropertiesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    pricePerNight: {
      type: Number,
    },
    capacity: {
      type: Number,
    },
    isPetFriendly: {
      type: Boolean,
      default: false,
    },
    hasWifi: {
      type: Boolean,
      default: false,
    },
    hasParking: {
      type: false,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const StayProperty = mongoose.model("StayProperty", StayPropertiesSchema);

module.exports = StayProperty;
