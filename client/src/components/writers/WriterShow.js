import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWriter } from "../../actions";
import { fetchBooks } from "../../actions/books";

class WriterShow extends React.Component {
  componentDidMount() {
    // in order to navigate correctly within nested props
    this.props.fetchWriter(this.props.match.params.id);
    this.props.fetchBooks();
  }

  render() {
    if (!this.props.writer) {
      return <div>Hang on </div>;
    }
    const { name, biography, image, url, books, id } = this.props.writer;
    return (
      <div key={id}>
        <h3>{name}</h3>
        <div>
          <img src={image} alt="nearly" className="img-responsive" />
        </div>
        <br />

        <div>
          <h4>
            BIOGRAPHY:
            <br />
            {biography}
          </h4>
          <div>
            <h3>
              {books.map(book => (
                <>
                  <div>{book.title}</div>
                  <Link to={`/books/${book.id}`} className="header">
                    <div>
                      <img
                        src={book.image}
                        alt="nearly"
                        className="img-responsive"
                      />
                    </div>
                  </Link>
                </>
              ))}
            </h3>
            <div>
              <h4>
                <a href={url}>GO TO MORE</a>
              </h4>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    writer: state.writers[ownProps.match.params.id],
    books: state.books
  };
};

export default connect(
  mapStateToProps,
  { fetchWriter, fetchBooks }
)(WriterShow);
