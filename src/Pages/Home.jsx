import { Link, navigate } from "@reach/router";
import React, { Component } from "react";
import AdimLogin from "../Components/AdimLogin";
class Home extends Component {
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
      <main>
        <p>News and article about Student</p>
        <AdimLogin hadnleAdminSubmit={this.hadnleAdminSubmit}></AdimLogin>
        <section className="news">
          <div className="topics">
            <h1>Topics</h1>
            <p>Information about student topics</p>
            <Link to="/topics">
              <button>Topics</button>{" "}
            </Link>
          </div>
          <div className="articles">
            <h1>articles</h1>
            <p>Information about student articles</p>
            <Link to="/articles">
              <button>articles</button>{" "}
            </Link>
          </div>
          <div className="comments">
            {" "}
            <h1>users</h1>
            <p>Information about student comments</p>
            <Link to="/users">
              <button>users</button>{" "}
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
