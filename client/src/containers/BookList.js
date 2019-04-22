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
    books: this.props.books,
    sortedBooks: [],
    sorted: false,
    searchQuery: ""
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
    let allBooks = [];
    if (this.state.sorted) {
      if (this.state.sortedBooks === [] && this.state.books) {
        this.getSortedBooks();
      } else {
        allBooks = this.state.sortedBooks;
      }
    } else {
      allBooks = this.state.books;
      // [
      //   ...this.state.books.filter(
      //     book =>
      //       book.title
      //         .toLowerCase()
      //         .includes(this.props.searchQuery.toLowerCase()) ||
      //       book.writers.map(writer =>
      //         writer.name
      //           .toLowerCase()
      //           .includes(this.props.searchQuery.toLowerCase())
      //       )
      //   )
      // ];
    }
    return allBooks.map(book => {
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
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
            >
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="business" value="irum@cantab.net" />
              <input type="hidden" name="lc" value="AR" />
              <input type="hidden" name="item_name" value={book.title} />
              <input type="hidden" name="amount" value={book.price} />
              <input type="hidden" name="currency_code" value="GBP" />
              <input type="hidden" name="button_subtype" value="products" />
              <input type="hidden" name="no_note" value="0" />
              <input type="hidden" name="shipping" value="3.00" />
              <input type="hidden" name="add" value="1" />
              <input
                type="hidden"
                name="bn"
                value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
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
        <h2>Books</h2>
        <input onChange={event => this.changeSearchQuery(event.target.value)} />
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
