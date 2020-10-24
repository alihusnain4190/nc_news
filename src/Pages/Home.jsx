import { Link, navigate } from "@reach/router";
import React, { Component } from "react";
import AdimLogin from "../Components/AdimLogin";
import ToggleComment from "../Components/ToggleComment";
import { Button } from "@material-ui/core";

class Home extends Component {
  btn = {
    backgroundColor: "#2E4372",
    textDecoration: 'none'
  };
  state = {
    admin: "",
    name: "",
    avatar_url: "",
  };
  hadnleAdminSubmit = ({ username, name, avatar_url }) => {
    this.setState({ admin: username, name: name, avatar_url: avatar_url });
    navigate(`/articles`, { state: { admin: username } });
  };
  render() {
    return (
      <main className="container">
        <section className="home-header">
          <h1 className="home__desh1">
            you can See news and Article about student below
          </h1>
          <ToggleComment className="home__toggle">
            <AdimLogin
              admin={"admin"}
              hadnleAdminSubmit={this.hadnleAdminSubmit}
            ></AdimLogin>
          </ToggleComment>
        </section>
        <section className="main">
          <div className="home--main">
            <h1>Topics</h1>
            <p>Information about student topics</p>
            <Link className="header__link" to="/topics">
              <Button
                style={this.btn}
                variant="contained"
                color="primary"
                href="#contained-buttons"
                onClick={this.hadleComment}
              >
                {" "}
                Topics
              </Button>{" "}
            </Link>
          </div>
          <div className="articles">
            <h1>Articles</h1>
            <p>Information about student articles</p>
            <Link to="/articles" className="header__link">
              <Button
                style={this.btn}
                variant="contained"
                color="primary"
                href="#contained-buttons"
                onClick={this.hadleComment}
              >
                Articles
              </Button>{" "}
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
