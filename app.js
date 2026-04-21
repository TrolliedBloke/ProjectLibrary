let inputForm = document.getElementById("user-form");
let bookDisplay = document.getElementById("book-display");

const myLibrary = [];

class Book {
  constructor(title, author, genre, pages) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
  }
}

function addBookToLibrary(title, author, genre, pages) {
  const newBook = new Book(title, author, genre, pages);
  myLibrary.push(newBook);
}

inputForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const pages = document.getElementById("pages").value;

  addBookToLibrary(title, author, genre, pages);
  displayLibrary();

  console.log(myLibrary);
});

function displayLibrary() {
  bookDisplay.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const newDiv = document.createElement("div");
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "REMOVE";

    deleteButton.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      displayLibrary();
    });
    newDiv.innerText = `TITLE: ${book.title} | AUTHOR: ${book.author} | GENRE: ${book.genre} | PAGES: ${book.pages}`;
    bookDisplay.appendChild(newDiv);
    newDiv.appendChild(deleteButton);
  });
}
