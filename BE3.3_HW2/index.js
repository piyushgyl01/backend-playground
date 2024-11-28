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

  {
    id: 3,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
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

app.delete("/movies/:id", (req, res) => {
  const movieId = req.params.id;

  const index = movies.findIndex((movie) => movie.id == movieId);

  if (index === -1) {
    res.status(404).json({ error: "Movie Not Found" });
  } else {
    movies.splice(index, 1);
    res.status(200), json({ message: "Movie deleted successfully" });
  }
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

const items = [
  { id: 1, itemName: "Spoon", color: "Silver", quantity: 8 },

  { id: 2, itemName: "Fork", color: "Silver", quantity: 8 },

  { id: 3, itemName: "Plate", color: "Off-White", quantity: 6 },
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

app.delete("/items/:id", (req, res) => {
  const itemId = req.params.id;

  const index = items.findIndex((item) => item.id == itemId);

  if (index === -1) {
    res.status(404).json({ error: "Item Not Found" });
  } else {
    items.splice(index, 1);
    res.status(200).json({ message: "Item deleted successfully" });
  }
});

app.get("/items", (req, res) => {
  res.send(items);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
