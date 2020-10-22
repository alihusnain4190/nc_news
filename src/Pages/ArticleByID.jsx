import React, { Component } from "react";
import { Link, navigate, Router } from "@reach/router";

import { getArticleByID } from "../api/api";
import CommentByArticle from "../Components/CommentByArticle";
import ErrorDisplay from "../Components/ErrorDisplay";
import Votes from "../Components/Votes";
import ToggleComment from "../Components/ToggleComment";
import Loader from "../Components/Loader";
class ArticleByID extends Component {
  state = {
    article: {},
    isLoading: true,
    error: null,
  };
  changeUpdataVote = (article_id, voteChange) => {
    let { votes, ...article } = this.state.article;
    // votes = votes + voteChange;
    let obj = {};
    obj = { ...article };
    obj.votes = votes + voteChange;

    this.setState((prevState) => {
      return {
        article: obj,
      };
    });
  };

  componentDidMount() {
    getArticleByID(this.props.article_id)
      .then(({ data: article }) => {
        this.setState({ article: article.article, isLoading: false });
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
    if (prevProps.article_id !== this.props.article_id) {
      getArticleByID(this.props.article_id)
        .then(({ data: article }) => {
          this.setState({ article: article.article, isLoading: false });
        })
        .catch(({ response }) => {
          this.setState({
            error: {
              // status: response.status,
              // messege: response.data.msg,
            },
            isLoading: false,
          });
        });
    }
  }
  render() {
    if (this.state.error)
      return (
        <ErrorDisplay
          msg={this.state.error.messege}
          status={this.state.error.status}
        ></ErrorDisplay>
      );

    if (this.state.isLoading) return <Loader></Loader>;
    let {
      article_id,
      title,
      topic,
      author,
      body,
      votes,
      comment_count,
      created_at,
    } = this.state.article;
    return (
      <div>
        <h1>title: {title}</h1>
        <h3>topic: {topic}</h3>
        <h3>author: {author}</h3>
        <p>{body}</p>
        <p>votes:{votes}</p>
        <p>time: {created_at}</p>
        <Votes
          votes={votes}
          article_id={article_id}
          changeUpdataVote={this.changeUpdataVote}
        ></Votes>
        <ToggleComment>
          <CommentByArticle
            author={author}
            article_id={article_id}
            path="articles/:article_id"
          ></CommentByArticle>
        </ToggleComment>
      </div>
    );
  }
}

export default ArticleByID;
