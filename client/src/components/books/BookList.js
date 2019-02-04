import React from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions";
import { Link } from "react-router-dom";

class BookList extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderAdmin(book) {
    if (book.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/books/edit/${book.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/books/delete/${book.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.books.map(book => {
      return (
        <div className="item" key={book.id}>
          {this.renderAdmin(book)}
          <i className="small middle aligned icon circle blank blue" />
          <div className="content">
            <Link to={`/books/${book.id}`} className="header">
              {book.title}
            </Link>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/books/new" className="ui button primary">
            Add new book
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Available books</h2>
        <div className="ui celled relaxed list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: Object.values(state.books),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchBooks }
)(BookList);
