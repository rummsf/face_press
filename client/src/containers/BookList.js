import React from "react";
// import _ from "lodash";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/books";
import { Link } from "react-router-dom";

class BookList extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderAdmin(book) {
    if (book.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/books/edit/${book.id}`}
            className="ui button primary green"
          >
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
          <div className="content">
            <h4>{book.title}</h4>
            <Link to={`/books/${book.id}`} className="header">
              <div>
                <img src={book.image} alt="nearly" className="img-responsive" />
              </div>
            </Link>

            {/* <div>{book.writers.map(writer => writer.name}</div> */}
            <div style={{ textAlign: "right" }} />
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/books/new" className="ui button primary olive">
            Add new book
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Books</h2>
        <div className="ui celled relaxed list">
          <div>{this.renderList()}</div>
          {this.renderCreate()}
        </div>
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
