import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import image from "../images/face-press-banner.jpg";
// import { updateFilter } from "../actions/index";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="center aligned">
          <Link to="/" className="item">
            <h1>@_@</h1>
          </Link>
        </div>
        <div className="ui secondary pointing menu">
          <Link to="/writers" className="item">
            All Writers
          </Link>
          <img src={image} alt="almost" />
          <hr />

          <div className="right menu">
            <Link to="/books" className="item">
              All Books
            </Link>
            <GoogleAuth />
          </div>
        </div>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     filter: state.filter
//   };
// };

// export default connect(
//   mapStateToProps,
//   { updateFilter }
// )(Header);

export default Header;
