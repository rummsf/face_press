import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import image from "../images/face-press-banner.jpg";

const Header = () => {
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
};
export default Header;
