import React, { Component } from "react";
import axios from "axios";
import { addCommentByArticleID } from "../api/api";
class AddComment extends Component {
  state = { comment: "" };
  handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ comment: value });
  };
  render() {
    return (
      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addCommentByArticleID(
              this.props.article_id,
              this.state.comment,
              this.props.author
            ).then(({ data: comment }) => {
              this.props.upDateComment(comment.comment);
            })
          }}
        >
          <textarea onChange={this.handleChange}></textarea>
          <button>addComment</button>
        </form>
      </section>
    );
  }
}

export default AddComment;
