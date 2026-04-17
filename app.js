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

const form = document.getElementById("user-input");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const genre = document.getElementById("genre");
  const pages = document.getElementById("pages");

  addBookToLibrary(title.value, author.value, genre.value, pages.value);
  updateDisplay();
  form.reset();
});

function updateDisplay() {
  const display = document.getElementById("library-display");
  display.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const newDiv = document.createElement("div");
    const newButton = document.createElement("button");
    newButton.textContent = "REMOVE";
    newDiv.classList.add("book-element");

    newDiv.textContent = `${book.title} ${book.author} ${book.genre} ${book.pages}`;

    newButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      updateDisplay();
    });

    display.appendChild(newDiv);
    display.appendChild(newButton);
  });
}
