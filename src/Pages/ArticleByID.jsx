import React, { Component } from "react";
import { Link, navigate, Router } from "@reach/router";

import { getArticleByID } from "../api/api";
import CommentByArticle from "../Components/CommentByArticle";
import ErrorDisplay from "../Components/ErrorDisplay";
class ArticleByID extends Component {
  state = {
    article: {},
    isLoading: true,
    error: null,
  };
  componentDidMount() {
    getArticleByID(this.props.article_id)
      .then(({ data: article }) => {
        this.setState({ article: article, isLoading: false });
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
          this.setState({ article: article, isLoading: false });
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
  }
  render() {
    if (this.state.error)
      return (
        <ErrorDisplay
          msg={this.state.error.messege}
          status={this.state.error.status}
        ></ErrorDisplay>
      );

    if (this.state.isLoading) return <h1>Loadin</h1>;
    const {
      article_id,
      title,
      topic,
      author,
      body,
      votes,
      comment_count,
      created_at,
    } = this.state.article.article;
    return (
      <div>
        <h1>title: {title}</h1>
        <h3>topic: {topic}</h3>
        <h3>author: {author}</h3>
        <p>{body}</p>
        <p>votes:{votes}</p>
        <p>👍</p>

        <p>👎</p>
        <p>time: {created_at}</p>
        <CommentByArticle article_id={article_id}></CommentByArticle>
      </div>
    );
  }
}

export default ArticleByID;
