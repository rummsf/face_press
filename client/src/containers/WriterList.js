import React from "react";
import { connect } from "react-redux";
import { fetchWriters } from "../actions/writers";
import { Link } from "react-router-dom";

class WriterList extends React.Component {
  componentDidMount() {
    this.props.fetchWriters();
  }

  renderAdmin(writer) {
    if (writer.userId === this.props.currentUserId) {
      return (
        <div className="left floated content">
          <Link
            to={`/writers/edit/${writer.id}`}
            className="ui button primary green"
          >
            Edit
          </Link>
          <Link
            to={`/writers/delete/${writer.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.writers.map(writer => {
      return (
        <div className="item" key={writer.id}>
          {this.renderAdmin(writer)}
          <div className="content">
            <Link to={`/writers/${writer.id}`} className="header">
              {writer.name}
            </Link>
            <div>
              <img src={writer.image} alt="nearly" className="img-responsive" />
            </div>
            <div>{writer.writer_book}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/writers/new" className="ui button primary olive">
            Add new writer
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Writers</h2>
        <div className="ui celled relaxed list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    writers: Object.values(state.writers),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchWriters }
)(WriterList);
