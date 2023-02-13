// Get the book collection container and the form
const bookCollection = document.getElementById("book-collection");
const bookForm = document.getElementById("book-form");

// Load the books from localStorage
let books = JSON.parse(localStorage.getItem("books")) || [];

// Render the books
function renderBooks() {
  bookCollection.innerHTML = "";
  for (const book of books) {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `<h4>${book.title}<br> ${book.author}</h4><button class="remove-button">Remove</button> <br> <hr>`;
    bookElement.querySelector(".remove-button").addEventListener("click", () => {
      removeBook(book.title);
    });
    bookCollection.appendChild(bookElement);
  }
}


// Add a new book
function addBook(title, author) {
    books.push({ title, author });
    localStorage.setItem("books", JSON.stringify(books));
    renderBooks();
  }
  
  // Remove specific book
  function removeBook(title) {
    books = books.filter(book => book.title !== title);
    localStorage.setItem("books", JSON.stringify(books));
    renderBooks();
  }
  
  // Handle the form  on the submit event
  bookForm.addEventListener("submit", event => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    addBook(title, author);
    bookForm.reset();
  });
  
  renderBooks();
  