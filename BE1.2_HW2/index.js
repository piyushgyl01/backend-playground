const { intialiseDatabase, initialiseDatabse } = require("./db/db.connect");
const fs = require("fs");
const Books = require("./models/books.models");

initialiseDatabse();

const jsonData = fs.readFileSync("books.json", "utf-8");
const booksData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const bookData of booksData) {
      const newBook = new Books({
        title: bookData.title,
        author: bookData.author,
        publishedYear: bookData.publishedYear,
        genre: bookData.genre,
        language: bookData.language,
        country: bookData.country,
        rating: bookData.rating,
        summary: bookData.summary,
        coverImageUrl: bookData.coverImageUrl,
      });
      newBook.save();
      console.log(`Book "${bookData.title}" saved.`);
    }
    console.log("Everything saved")
  } catch (error) {
    console.log("Error sending the data", error);
  }
}

seedData()