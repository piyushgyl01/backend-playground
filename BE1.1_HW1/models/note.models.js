const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: String,
    category: {
      type: String,
      enum: ["Personal", "Work", "Study", "Ideas", "Journal", "Other"],
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;
