const express = require("express");
const router = express.Router();
const test_task = require("./task");
const axios = require("axios");

let data = [
  {
    name: "Living Room Bookcase",
    color: "Brown",
    shelves: [
      {
        shelf_number: 1,
        shelf_name: "Top Shelf",
        books: [
          {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "Classic",
            year: 1925,
          },
          {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Classic",
            year: 1960,
          },
        ],
      },
      {
        shelf_number: 2,
        shelf_name: "Middle Shelf",
        books: [
          {
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            genre: "Fantasy",
            year: 1997,
          },
          {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            year: 1937,
          },
        ],
      },
    ],
  },
  {
    name: "Study Bookcase",
    color: "White",
    shelves: [
      {
        shelf_number: 1,
        shelf_name: "Top Shelf",
        books: [
          {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            genre: "Classic",
            year: 1813,
          },
          {
            title: "Jane Eyre",
            author: "Charlotte Brontë",

            genre: "Classic",
            year: 1847,
          },
        ],
      },
    ],
  },
  {
    name: "Bedroom Bookcase",
    color: "Black",
    shelves: [
      {
        shelf_number: 1,
        shelf_name: "Top Shelf",
        books: [
          {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            genre: "Classic",
            year: 1951,
          },
          {
            title: "1984",
            author: "George Orwell",
            genre: "Dystopian",
            year: 1949,
          },
        ],
      },
      {
        shelf_number: 2,
        shelf_name: "Middle Shelf",
      }
    ],
  },
];

router.get("/", (req, res) => {
  axios
    .get("http://localhost:8000/api/sort-books")
    .then((response) => {
      res.send(test_task(response.data));
    })
    .catch((error) => {
      res.send(test_task(data));
    });
});

module.exports = router;
