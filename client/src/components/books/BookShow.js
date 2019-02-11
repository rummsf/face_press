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

    const {
      title,
      poet,
      description,
      pages,
      price,
      image,
      year,
      review,
      contributor,
      publisher
    } = this.props.book;
    return (
      <div>
        <h3>{title}</h3>
        by
        <h4>{poet}</h4>
        <div>
          <img src={image} alt="nearly" className="img-responsive" />
        </div>
        <h4>{description}</h4>
        <h5>{review}</h5>
        <h5>{publisher}</h5>
        <h5>{pages} pages</h5>
        <h5>{contributor}</h5>
        <h5>{year}</h5>
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
