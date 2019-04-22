# face_press

React-Redux frontend with Rails backend

e-Commerce website (re-build of face-press.org)

Functionality:

- View list of books and writers, with index and show pages including images hosted on imgur and links to writers' external websites
- Access many-to-many relationship in Rails backend, to render associated writers and books --> View multiple books by a writer, and multiple writers of a book
- View homepage with dynamic rendering of most recent publications. Filter and sort books.
- Buy books via Paypal
- Sign in with Google Auth to create a book with a POST request to add to the book index
- Routes for homepage, books, writers and new book form

---

"npm start" to run front-end
"rails s" to run back-end
(CORS plugin: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)
