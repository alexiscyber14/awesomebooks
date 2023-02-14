
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
          render();
        }

    removeBook(id) {
        books = books.filter(book => book.id !== id);
        localStorage.setItem("books", JSON.stringify(books));
        render();
        }
    
    render() {
        const bookCollection = document.getElementById("book-collection");
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

    load(){
      const books = JSON.parse(localStorage.getItem("books")) || [];
      for(const book of books){
        this.books.push(new Book(book.id, book.title, book.author));
      }
    } 
    
}

const bookCollection = new BookCollection();
bookCollection.load();
bookCollection.render()

const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit",(e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  bookCollection.addBook(title, author);
  bookForm.reset();
  
});
