import React from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/books";

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
          <div>
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
