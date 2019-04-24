import React from "react";
import { connect } from "react-redux";
import { fetchBook, fetchWriters } from "../../actions";
import { Link } from "react-router-dom";

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
      description,
      pages,
      price,
      image,
      year,
      review,
      contributor,
      publisher,
      writers
    } = this.props.book;

    return (
      <div>
        <h3>{title}</h3>
        <div>
          by
          <Link
            to={`/writers/${writers.map(writer => writer.id)}`}
            className="header"
          >
            <div>
              <h3>{writers.map(writer => writer.name)}</h3>
            </div>
          </Link>
        </div>
        <br />
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
        <div style={{ textAlign: "center" }} />
        <form
          target="paypal"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
        >
          <input type="hidden" name="cmd" value="_cart" />
          <input type="hidden" name="business" value="irum@cantab.net" />
          <input type="hidden" name="lc" value="AR" />
          <input type="hidden" name="item_name" value={title} />
          <input type="hidden" name="amount" value={price} />
          <input type="hidden" name="currency_code" value="GBP" />
          <input type="hidden" name="button_subtype" value="products" />
          <input type="hidden" name="no_note" value="0" />
          <input type="hidden" name="shipping" value="2.95" />
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
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.match.params.id],
    writers: Object.values(state.writers)
  };
};

export default connect(
  mapStateToProps,
  { fetchBook, fetchWriters }
)(BookShow);
