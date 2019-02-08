import React from "react";
import { connect } from "react-redux";
import { fetchWriter } from "../../actions";

class WriterShow extends React.Component {
  componentDidMount() {
    this.props.fetchWriter(this.props.match.params.id);
  }

  render() {
    if (!this.props.writer) {
      return <div>Hang on </div>;
    }

    const { title, description, pages, price, image } = this.props.writer;
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
  return { writer: state.writers[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchWriter }
)(WriterShow);
