const mongoose = require("mongoose");

const PlayerProfilesSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    country: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    gamesPlayed: {
      type: Number,
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
    preferredGame: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PlayerProfile = mongoose.model("PlayerProfile", PlayerProfilesSchema);

module.exports = PlayerProfile;
