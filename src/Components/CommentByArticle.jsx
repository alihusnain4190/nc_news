import React, { Component } from "react";
import { getCommentByArticleID } from "../api/api";
import Loader from "../Components/Loader";
import AddComment from "./AddComment";
import CommentVotes from "./CommentVotes";
import DeleteComment from "./DeleteComment";
import ErrorDisplay from "../Components/ErrorDisplay";
class CommentByArticle extends Component {
  state = {
    comments: [],
    isLoading: true,
    admin: "",
    error: null,
  };
  componentDidMount() {
    this.setState({ admin: this.props.admin });

    getCommentByArticleID(this.props.article_id)
      .then(({ data: comment }) => {
        this.setState({ comments: comment.comments, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          error: {
            status: response.status,
            messege: response.data.msg,
          },
          isLoading: false,
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id)
      getCommentByArticleID(this.props.article_id)
        .then(({ data: comment }) => {
          this.setState({ comments: comment.comments, isLoading: false });
        })
        .catch(({ response }) => {
          this.setState({
            error: {
              status: response.status,
              messege: response.data.msg,
            },
            isLoading: false,
          });
        });
  }
  //add comment using form
  upDateComment = (insertcomment) => {
    this.setState((prevState) => {
      return {
        comments: [insertcomment, ...prevState.comments],
        isLoading: false,
      };
    });
  };
  ///uppdate comment votes
  changeUpdataVote = (comment_id, voteChange) => {
    this.setState((currentState) => {
      const commentsCopy = currentState.comments.map((comment) => {
        const commentCopy = { ...comment };
        if (commentCopy.comment_id === comment_id) {
          commentCopy.votes = commentCopy.votes + voteChange;
        }
        return commentCopy;
      });
      return { comments: commentsCopy };
    });
  };

  //
  showCommentAfterDelete = (comment_id) => {
    this.setState((prevState) => {
      const filteredComments = prevState.comments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
      return { comments: filteredComments };
    });
  };
  render() {
    if (this.state.error)
      return (
        <ErrorDisplay
          msg={this.state.error.messege}
          status={this.state.error.status}
        ></ErrorDisplay>
      );
    if (this.state.isLoading) return <Loader></Loader>;

    return (
      <>
        <AddComment
          upDateComment={this.upDateComment}
          article_id={this.props.article_id}
          author={this.props.author}
        ></AddComment>
        {this.state.comments.map(({ comment_id, body, votes }) => {
          return (
            <div key={comment_id} className="comment-toggle-wrapper">
              <p className="comment-p">{body}</p>

              <p className="comment-p">votes: {votes}</p>
              {this.state.admin === "jessjelly" ? (
                <CommentVotes
                  changeUpdataVote={this.changeUpdataVote}
                  comment_id={comment_id}
                ></CommentVotes>
              ) : null}
              {this.state.admin === "jessjelly" ? (
                <DeleteComment
                  showCommentAfterDelete={this.showCommentAfterDelete}
                  comment_id={comment_id}
                ></DeleteComment>
              ) : null}
            </div>
          );
        })}
      </>
    );
  }
}

export default CommentByArticle;
