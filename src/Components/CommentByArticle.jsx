import React, { Component } from "react";
import { getCommentByArticleID } from "../api/api";
import Loader from '../Components/Loader'
import AddComment from "./AddComment";
import UpdateComment from "./UpdateComment";
class CommentByArticle extends Component {
  state = {
    comments: [],
    isLoading: true,
  };
  componentDidMount() {
    getCommentByArticleID(this.props.article_id).then(({ data: comment }) => {
      this.setState({ comments: comment.comments, isLoading: false });
    });
  }
  componentDidUpdate(prevProps,prevState) {
    if(prevProps.article_id!==this.props.article_id)
    getCommentByArticleID(this.props.article_id).then(({ data: comment }) => {
      this.setState({ comments: comment.comments, isLoading: false });
    });
  }
  upDateComment=(insertcomment)=> {
    this.setState((prevState) => {
      console.log(prevState.comments);
      return {
        comments: [insertcomment,...prevState.comments],
        isLoading:false
      }
    });
  }

  render() {
    if (this.state.isLoading) return <Loader></Loader>
   
    return (
      <div>
        {this.state.comments.map(({ comment_id, body }) => {
          return <p key={comment_id}>{body}
            <UpdateComment></UpdateComment>
          </p>;
        })}
        <AddComment upDateComment={this.upDateComment} article_id={this.props.article_id}  author={this.props.author}></AddComment>
      </div>
    );
  }
}

export default CommentByArticle;
