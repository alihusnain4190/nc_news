import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

class AdimLogin extends Component {
  btn = {
    backgroundColor: "#2E4372",
    textDecoration: "none",
  };
  state = {
    admin: "jessjelly",
    loginAdmin: "",
    wrongPerson: false,
    user: [],
  };
  hadnleAdmin = (e) => {
    const { value } = e.target;
    if (value === this.state.admin) {
      axios
        .get(
          `https://husnain4190news.herokuapp.com/api/users/${this.state.admin}`
        )
        .then(({ data }) => {
          this.setState({ user: data.user, loginAdmin: data.user.username });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    if (this.state.wrongPerson) return <p>Error</p>;
    return (
      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (this.state.user.length === 0) {
              this.setState({ wrongPerson: true });
            } else {
              this.props.hadnleAdminSubmit(this.state.user);
            }
          }}
        >
          <TextField
         
            id="outlined-basic"
            label="userName"
            variant="outlined"
            onChange={this.hadnleAdmin}
            type="text"
            id="admin"
            name="admin"
          ></TextField>
        </form>
      </section>
    );
  }
}

export default AdimLogin;
