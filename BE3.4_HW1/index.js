const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express server.");
});

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },

  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

app.get("/books", (req, res) => {
  res.send(books);
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const index = books.findIndex((book) => book.id == bookId);

  if (index === -1) {
    res.status(404).json({ error: "Book Not Found" });
  } else {
    books.splice(index, 1);
    res.status(200).json({ message: "Book deleted successfully" });
  }
});

app.post("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBookData = req.body;

  const bookToUpdate = books.find((book) => book.id === bookId);

  if (!bookToUpdate) {
    res.status(404).json({ error: "Book not found." });
  } else {
    if (
      !updatedBookData.title ||
      !updatedBookData.year ||
      !updatedBookData.author
    ) {
      res.status(400).json({ error: "Title, year and author are required." });
    } else {
      Object.assign(bookToUpdate, updatedBookData);
      res.status(200).json({
        message: "Book data updated successfully.",
        book: bookToUpdate,
      });
    }
  }
});

const todos = [
  { id: 1, title: "Water the plants", day: "Saturday" },

  { id: 2, title: "Go for a walk", day: "Sunday" },
];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;

  const index = todos.findIndex((todo) => todoId == todo.id);

  if (index === -1) {
    res.status(404).json({ error: "Todo Not Found" });
  } else {
    todos.splice(index, 1);
    res.status(200).json({ message: "Todo deleted successfully" });
  }
});

app.post("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const updatedTodo = req.body;

  const todoToUpdate = todos.find((todo) => todo.id === todoId);

  if (!todoToUpdate) {
    res.status(404).json({ error: "Todo not found" });
  } else {
    if (!updatedTodo.title || !updatedTodo.day) {
      res.status(400).json({ error: "Title and message are required" });
    } else {
      Object.assign(todoToUpdate, req.body);
      res
        .status(200)
        .json({
          message: "Todo data updated successfully.",
          todo: todoToUpdate,
        });
    }
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
