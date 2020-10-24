import React, { Component } from "react";
import { Button } from "@material-ui/core";

class ToggleComment extends Component {
  // for Button style
  btn = {
    backgroundColor: "#2E4372",
  };

  state = {
    showHideAdmin: true,
    showComment: false,
  };

  hadleComment = () => {
    this.setState((prevState) => {
      return { showComment: !prevState.showComment };
    });
  };
  render() {
    if (
      this.props.children.props.admin === "admin" &&
      this.state.showHideAdmin === true
    )
      return (
        <div className="admin-toggle">
          <Button
            style={this.btn}
            variant="contained"
            color="primary"
            href="#contained-buttons"
            onClick={this.hadleComment}
          >
            admin
          </Button>
          {this.state.showComment ? this.props.children : null}
        </div>
      );
    return (
      <div className="comment-toggle">
        <Button
          style={this.btn}
          variant="contained"
          color="primary"
          href="#contained-buttons"
          onClick={this.hadleComment}
        >
          Comment{" "}
        </Button>
        {this.state.showComment ? this.props.children : null}
      </div>
    );
  }
}

export default ToggleComment;
