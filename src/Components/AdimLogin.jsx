import React, { Component } from "react";
import axios from "axios";
class AdimLogin extends Component {
  state = {
    admin: "jessjelly",
    loginAdmin: "",
      wrongPerson: false,
    user:[],
  };
  hadnleAdmin = (e) => {
    const { value } = e.target;
      if (value === this.state.admin) {
       
  
          axios
              .get(
                  `https://husnain4190news.herokuapp.com/api/users/${this.state.admin}`
              )
              .then(({ data }) => {
                  this.setState({ user: data.user,loginAdmin:data.user.username })
              }).catch(err => {
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

         
            if (this.state.user.length===0) {
              this.setState({ wrongPerson: true });
            } else {
              this.props.hadnleAdminSubmit(this.state.user);
            }
          }}
        >
          <label htmlFor="admin">
            Admin Name:
            <input
              onChange={this.hadnleAdmin}
              type="text"
              id="admin"
              name="admin"
            ></input>
          </label>
        <button >Click</button>
            </form>
            {/* <ShowUser name={this.state.user} ></ShowUser> */}
                  
      </section>
    );
  }
}

export default AdimLogin;
