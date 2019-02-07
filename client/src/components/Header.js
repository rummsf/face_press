import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import image from "../images/face-press-banner.jpg";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Book
      </Link>
      <img src={image} />
      <hr />
      <div className="center aligned">
        <h1>@_@</h1>
      </div>
      <div className="right menu">
        <Link to="/" className="item">
          All Books
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};
export default Header;
