import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
// import Filter from "./Filter";
import image from "../images/face-press-banner.jpg";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="ui center aligned segment">
          <Link to="/" className="item">
            <h1>@_@</h1>
          </Link>
          <img src={image} alt="almost" className="ui centered image" />
        </div>
        <div className="ui secondary pointing menu">
          <Link to="/writers" className="item">
            <h5>All Writers</h5>
          </Link>

          <div className="right menu">
            <Link to="/books" className="item">
              <h5>All Books</h5>
            </Link>
            <Link to="/books/new" className="item">
              <h5>Recommend a Book</h5>
            </Link>
            <GoogleAuth />
            {/* <Filter /> */}
          </div>
        </div>
      </>
    );
  }
}

export default Header;
