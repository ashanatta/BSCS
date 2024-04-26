// Sample array of books
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian Fiction",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
  },
];

// Using map to create an array of book titles
// const bookTitles = books.map((book) => book.title);
// console.log("Book Titles:", bookTitles);

// Using filter to get only fiction books
// const fictionBooks = books.filter((book) => book.genre === "Fiction");
// console.log("Fiction Books:", fictionBooks);

// // Using reduce to calculate the total number of years all books were published
// const totalYears = books.reduce((sum, book) => sum + book.year, 0);
// console.log("Total Years:", totalYears);

// // Using slice to get a subset of books (e.g., books published between 1950 and 2000)
// const subsetOfBooks = books.slice(1, 4);
// console.log("Subset of Books:", subsetOfBooks);

// // Using splice to remove a book from the array by ID (e.g., remove the book with ID 3)
// const bookToRemove = books.find((book) => book.id === 3);
// const indexToRemove = books.indexOf(bookToRemove);
// const removedBook = books.splice(indexToRemove, 1);
// console.log("Removed Book:", removedBook);
// console.log("Remaining Books:", books);

// Using concat to merge two arrays of books
// const additionalBooks = [
//   {
//     id: 6,
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     year: 1937,
//     genre: "Fantasy",
//   },
//   {
//     id: 7,
//     title: "The Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     year: 1954,
//     genre: "Fantasy",
//   },
// ];

// const mergedBooks = books.concat(additionalBooks);
// console.log("Merged Books:", mergedBooks);
