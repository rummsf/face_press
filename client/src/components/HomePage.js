import React from "react";

class HomePage extends React.Component {
  renderNewBooks = props => {
    return props.books
      .filter(book => book.year === "2017")
      .map(book => {
        return (
          <div>
            {book.title}
            {book.image}
          </div>
        );
      });
  };

  render() {
    return (
      <div>
        <h1>Some new books</h1>
        {/* {this.renderNewBooks()} */}
      </div>
    );
  }
}

export default HomePage;
