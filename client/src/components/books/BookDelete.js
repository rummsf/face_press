import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";
import { fetchBook, deleteBook } from "../../actions";

class BookDelete extends React.Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteBook(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.book) {
      return "You are about to delete this";
    }
    return `You are about to delete ${this.props.book.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Book"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { book: state.books[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchBook, deleteBook }
)(BookDelete);
