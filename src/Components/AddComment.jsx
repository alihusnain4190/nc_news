import React, { Component } from "react";
import { addCommentByArticleID } from "../api/api";
import { Button } from "@material-ui/core";

class AddComment extends Component {
  state = { comment: "" };
  handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ comment: value });
  };
  render() {
    return (
      <section className="comment-section">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addCommentByArticleID(
              this.props.article_id,
              this.state.comment,
              this.props.author
            ).then(({ data: comment }) => {
              this.props.upDateComment(comment.comment);
            });
          }}
        >
          <textarea
            value="write something about post"
            class="textinput"
            onChange={this.handleChange}
          ></textarea>
          <button class="comment-btn">Add-Comment</button>
        </form>
      </section>
    );
  }
}

export default AddComment;
