import React, { Component } from "react";
import { getCommentByArticleID } from "../api/api";

class CommentByArticle extends Component {
  state = {
    comments: {},
    isLoading: true,
  };
  componentDidMount() {
    getCommentByArticleID(this.props.article_id).then(({ data: comment }) => {
      this.setState({ comments: comment.comments, isLoading: false });
    });
  }
  render() {
    const { comment_id, body } = this.state.comments;
   
    if (this.state.isLoading) return <h1>Loading</h1>;
    return (
      <div>
        {this.state.comments.map(({ comment_id, body }) => {
          return <p key={comment_id}>{body}</p>;
        })}
      </div>
    );
  }
}

export default CommentByArticle;
