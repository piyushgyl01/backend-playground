const mongoose = require("mongoose");

const MusicAlbumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    enum: [
      "Rock",
      "Pop",
      "Hip-Hop",
      "Jazz",
      "Classical",
      "Country",
      "Electronic",
      "R&B",
      "Reggae",
      "Indie",
    ],
  },
  releaseYear: {
    type: Number,
  },
  recordLabel: {
    type: String,
  },
  format: {
    type: String,
  },
  isExplicit: {
    type: Boolean,
    default: false,
  },
  isAvailableOnStreaming: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

const MusicAlbum = mongoose.model("MusicAlbum", MusicAlbumSchema);

module.exports = MusicAlbum;
