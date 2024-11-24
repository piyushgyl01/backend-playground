const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: [
    {
      type: String,
      enum: ["Low", "Medium", "High"],
    },
  ],
  dueDate: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
  },
  tags: [
    {
      type: String,
      enum: [],
    },
  ],
  createdAt: {
    type: Number,
  },
  updatedAt: {
    type: Number,
  },
});

const Todo = mongoose.model("Todo", TodosSchema);

module.exports = Todo;
