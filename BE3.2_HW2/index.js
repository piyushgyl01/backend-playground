const express = require("express");
const app = express();

app.use(express.json());

const movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },

  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
];

app.get("/", (req, res) => {
  res.send("Hello express!!");
});

app.post("/movies", (req, res) => {
  const newMovie = req.body;

  if (!newMovie.title || !newMovie.director || !newMovie.director) {
    res.status(400).json({ json: "title, director and year and required " });
  } else {
    movies.push(newMovie);
    res
      .status(201)
      .json({ message: "Movies added successfully.", movie: newMovie });
  }
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

const items = [
  { id: 1, itemName: "Spoon", color: "Silver", quantity: 8 },

  { id: 2, itemName: "Fork", color: "Silver", quantity: 8 },
];

app.post("/items", (req, res) => {
  const newItem = req.body;

  if (!newItem.itemName || !newItem.color || !newItem.quantity) {
    res.status(400) -
      json({ json: "Item name, color and quantity is required" });
  } else {
    items.push(newItem);
    res
      .status(201)
      .json({ message: "Items added successfully.", item: newItem });
  }
});

app.get("/items", (req, res) => {
  res.send(items);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
