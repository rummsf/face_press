import React from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/books";
import { Link } from "react-router-dom";
import "./ItemList.css";

class BookList extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
    this.getSortedBooks();
  }

  state = {
    sortedBooks: [],
    sorted: false,
    searchQuery: ""
  };

  getNewestBooks = allBooks => {
    return allBooks.filter(book => book.year === 2017 || book.year === 2018);
  };

  changeSearchQuery = searchQuery => {
    this.setState({
      searchQuery
    });
  };

  getSortedBooks() {
    let sortedBooks = [...this.props.books];
    sortedBooks.sort(function(a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });
    this.setState({
      sortedBooks: sortedBooks
    });
  }

  renderMember(book) {
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
    let allBooks = [];
    if (this.state.sorted) {
      if (this.state.sortedBooks === [] && this.props.books.length > 0) {
        this.getSortedBooks();
      } else {
        allBooks = this.state.sortedBooks;
      }
    } else {
      allBooks = this.props.books.filter(
        book =>
          book.title
            .toLowerCase()
            .includes(this.state.searchQuery.toLowerCase()) ||
          book.writers.filter(writer =>
            writer.name
              .toLowerCase()
              .includes(this.state.searchQuery.toLowerCase())
          ).length > 0
      );
    }

    const booksToRender =
      this.props.match.path === "/" ? this.getNewestBooks(allBooks) : allBooks;

    return booksToRender.map(book => {
      return (
        <div className="item" key={book.id}>
          {this.renderMember(book)}
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

  handleClick() {
    this.setState({
      sorted: !this.state.sorted
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.match.path === "/" ? "Newest Books" : "Books"}</h2>
        <div class="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search by title or writer"
            onChange={event => this.changeSearchQuery(event.target.value)}
          />
          <i className="search icon" />
        </div>
        <br />

        <div>
          <div className="item-list">{this.renderCreate()}</div>
          <button
            className="ui button primary"
            onClick={() => this.handleClick()}
          >
            {this.state.sorted ? "Unsort!" : "Sort!"}
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
