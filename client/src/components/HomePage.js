import React from "react";

class HomePage extends React.Component {
  renderNewBooks() {
    return props.books
      .filter(book => book.year === "2017")
      .map(book => {
        return (
          <>
            {book.title}
            {book.image}
          </>
        );
      });
  }

  render() {
    return (
      <div>
        <h1>Some new books</h1>
        {this.renderNewBooks()}
      </div>
    );
  }
}

export default HomePage;
