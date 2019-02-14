import React from "react";
// import _ from "lodash";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/books";
import { Link } from "react-router-dom";
import "./ItemList.css";

class BookList extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  state = {
    books: this.props.books
  };

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
          <div className="item">
            <div style={{ textAlign: "center" }}>
              <h4>
                {book.title} by <br /> {book.writers.map(writer => writer.name)}
              </h4>
            </div>
            <Link to={`/books/${book.id}`} className="header">
              <div>
                <img src={book.image} alt="nearly" className="img-responsive" />
              </div>
            </Link>
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
            Recommend a book
          </Link>
        </div>
      );
    }
  }

  handleClick = () => {
    this.setState({
      books: this.props.books.sort()
    });
  };

  render() {
    return (
      <div>
        <h2>Books</h2>
        <div>
          <div className="item-list">{this.renderCreate()}</div>
          <button
            className="ui button primary"
            onClick={() => this.handleClick()}
          >
            Sort!
          </button>
          <div className="item-list">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //returns an array instead of an object
    books: Object.values(state.books),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchBooks }
)(BookList);
