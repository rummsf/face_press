# face_press

React-Redux frontend with Rails backend

E-commerce website (re-build of face-press.org)

Current functionality:

- List of books and writers, with index and show pages including images hosted on imgur and links to writers' external websites.
- Routes for homepage, books, writers and new book form
- Access many-to-many relationship in Rails backend, to render associated writers and books --> View multiple books by a writer, and multiple writers of a book.
- Google Auth sign-in.
- POST request: Once signed in, recommend a book by creating it and adding to the catalogue, with a writer selected from a dropdown menu.
- Home page with dynamic rendering of most recent publications.
- Initial CSS styling.


Features under development:

- Edit book details, delete book.
- Add PayPal links for purchases.
- Clean writer names, to remove comma and to appear "forename surname"
