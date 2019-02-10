import React from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/books";
// import BookList from "../containers/BookList";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderNewBooks() {
    console.log(this.props);
    return this.props.books
      .filter(book => book.year === 2017 || book.year === 2018)
      .map(book => {
        return (
          <div
            className="item"
            key={book.id}
            // style="display:grid"
          >
            {book.title}
            <br />
            <img src={book.image} alt="nearly" />
          </div>
        );
      });
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        <h1>Some new books</h1>
        {this.renderNewBooks(books)}

        {/* <BookList books={books} /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { books: Object.values(state.books) };
};

export default connect(
  mapStateToProps,
  { fetchBooks }
)(HomePage);
