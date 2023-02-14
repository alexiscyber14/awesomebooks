class Book {
    constructor (id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}

class BookCollection {
    constructor () {
        this.books = [];
    }
    getNextId() {
        let maxId = 0;
        for (const book of books) {
          if (book.id > maxId) {
            maxId = book.id;
          }
        }
        return maxId + 1;
      }
    
    addBook(title, author) {
        const id = getNextId();
          books.push({ id, title, author });
          localStorage.setItem("books", JSON.stringify(books));
          renderBooks();
        }

    removeBook(id) {
        books = books.filter(book => book.id !== id);
        localStorage.setItem("books", JSON.stringify(books));
        renderBooks();
        }
    
    renderBooks() {
        bookCollection.innerHTML = "";
        for (const book of books) {
            const bookElement = document.createElement("div");
            bookElement.innerHTML = `<h4>${book.title}<br> ${book.author}</h4><button class="remove-button">Remove</button> <br> <hr>`;
            bookElement.querySelector(".remove-button").addEventListener("click", () => {
            removeBook(book.id);
            });
            bookCollection.appendChild(bookElement);
        }
        }

    save(){
        localStorage.setItem("books", JSON.stringify(books))
    }
    
}
