//bulit in data stracture in javascript
//arry
//object
//set
//map

//https://www.youtube.com/shorts/1ulzgRWW5TI

//Custom data stracture

//hash table
//linklist
//graph
//stack
//queues
//circular queues
//tree

// const array = [1, 2, 3, 4, 5];
// array.unshift(0);
// array.shift(0);
// array.push(6);
// array.pop(5);
// array.pop(4);
// for (let i of array) {
//   console.log(i);
// }

//map,filter,reduce,slice,splice,concat

const array1 = [1, 2, 3, 4, 5];
const obj = {
  uni: "umt",
};
// const result = array1.map((value) => value);
const result = array1.map((value) => {
  return value;
});
// console.log(result);

//////map///////////////

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

// const bookTitles = books.map((book) => book.title);
// console.log("bookTital: ", bookTitles);

// const fictionbook = books.filter((book) => book.year > 1940);
// console.log(fictionbook);

// const totalyear = books.reduce((sum, book) => sum + book.year, 0);
// console.log(totalyear);

// const booksslice = books.slice((1, 3));
// console.log(booksslice);

// const newarry = [1, 2, 3, 4, 5];

// const numsli = newarry.slice(3, 4);
// console.log(numsli);

const additionalBooks = [
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "Fantasy",
  },
];

const mergedBooks = books.concat(additionalBooks);
console.log("Merged Books:", mergedBooks);
