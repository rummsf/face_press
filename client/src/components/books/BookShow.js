import React from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../actions";

class BookShow extends React.Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    if (!this.props.book) {
      return <div>Hang on </div>;
    }

    const { title, description, pages, price, image } = this.props.book;
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <img src={image} alt="nearly" className="img-responsive" />
        </div>
        <h4>{description}</h4>
        <h5>{pages} pages</h5>
        <h5>£{price}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { book: state.books[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchBook }
)(BookShow);
