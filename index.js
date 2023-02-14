class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.books = [];
  }

  getNextId() {
    let maxId = 0;
    for (const book of this.books) {
      if (book.id > maxId) {
        maxId = book.id;
      }
    }
    return maxId + 1;
  }

  addBook(title, author) {
    const id = this.getNextId();
    const book = new Book(id, title, author);
    this.books.push(book);
    this.save();
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.save();
  }

  render() {
    const bookCollection = document.getElementById('book-collection');
    bookCollection.innerHTML = '';
    const color = '#fff';
    for (const book of this.books) {
      const bookElement = document.createElement('div');
      bookElement.className = 'list-block';
      bookElement.innerHTML = `<h4>${book.title} by ${book.author}</h4><button class="remove-button">Remove</button>`;
      bookElement.querySelector('.remove-button').addEventListener('click', () => {
        this.removeBook(book.id);
        this.render();
      });
      bookCollection.appendChild(bookElement);
    }
  }

  save() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  load() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    for (const book of books) {
      this.books.push(new Book(book.id, book.title, book.author));
    }
  }
}

const bookCollection = new BookCollection();
bookCollection.load();
bookCollection.render();

const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  bookCollection.addBook(title, author);
  bookCollection.render();
  bookForm.reset();
});

var pev = document.querySelectorAll(".window");
var btx = document.querySelectorAll(".switch")

                    var palNav = function(nual){
                        pev.forEach((slide) => {
                            slide.classList.remove('current-window');

                            btx.forEach((btn)=>{
                                btn.classList.remove('active');
                            });
                        });

                        pev[nual].classList.add('current-window');
                        btx[nual].classList.add('active');
                    }
                    btx.forEach((btn, i) => {
                        btn.addEventListener("click", () => {
                            palNav(i);
                        });
                    });
const timeDate = document.getElementById('dated')
const date = new Date();
timeDate.innerHTML = date;