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

    const { name, biography, image, url, books } = this.props.writer;
    return (
      <div>
        <h3>{name}</h3>
        <div>{books}</div>
        <div>
          <img src={image} alt="nearly" className="img-responsive" />
        </div>
        <h4>{biography}</h4>
        <div>
          <h4>
            <a href={url}>GO TO MORE</a>
          </h4>
        </div>
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
