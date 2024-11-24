const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema(
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
    birthDate: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePictureUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;
