const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express server.");
});

app.get("/signIn", (req, res) => {
  res.send("This is the sign in the page");
});

app.get("/booking", (req, res) => {
  res.send("Book your tickets here");
});

app.get("/clothing/kids", (req, res) => {
  res.send("This is the kids wear page");
});

app.get("/blogs", (req, res) => {
  res.send("This is the blog page");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on the port", PORT);
});
