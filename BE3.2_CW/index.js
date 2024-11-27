const express = require("express");
const app = express();

app.use(express.json());

const cars = [{ id: 1, make: "Toyota", model: "Camry", year: 2022 }];

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.post("/cars", (req, res) => {
  const newCar = req.body;

  if (!newCar.make || !newCar.model || !newCar.year) {
    res.status(400).json({ json: "Make, model, and year are required." });
  } else {
    cars.push(newCar);
    res.status(201).json({ message: "Cars added successfully.", car: newCar });
  }
});

app.get("/cars", (req, res) => {
  res.send(cars);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`)
})
