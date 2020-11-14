import React from "react";

import { Link } from "@reach/router";
import { Button, FilledInput } from "@material-ui/core";
const Header = () => {
  const btn = {
    backgroundColor: "#2E4372",
  };
  return (
    <header className="header">
      <h1 className="header__logo">
        <Link className="header__logo header__link" to="/">
       
          Student News
        </Link>
      </h1>
      <ul className="header__list">
        <li className="header__item">
          <Link className="header__link" to="/topics">
            <Button
              style={btn}
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Topics
            </Button>
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/articles">
            <Button
              style={btn}
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Articles
            </Button>
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
