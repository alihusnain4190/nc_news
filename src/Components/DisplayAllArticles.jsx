import { Link } from "@reach/router";
import React from "react";
import CommentIcon from "@material-ui/icons/Comment";
const DisplayAllArticles = ({ articles, admin }) => {
  return articles.map(
    ({
      article_id,
      title,
      topic,
      author,
      body,
      votes,
      comment_count,
      created_at,
    }) => {
      return (
        <section className="articles" key={article_id}>
          {/* pass url and user value from state */}
          <Link to={`/articles/${article_id}`} state={{ admin: admin }}>
            <h1 className="article_title">title: {title}</h1>
          </Link>
          <div className="article-desp">
            <h2 className="article__topic">{topic}</h2>
            <h4 className="article__author">author: {author}</h4>
            <p className="article__time">time: {created_at}</p>
          </div>
          <div className="article-comment">
            <p className="article-comment__vote">votes:{votes}</p>
            <Link
              className="article__Link__comment"
              to={`/articles/${article_id}`}
              state={{ admin: admin }}
            >
              <CommentIcon className="article__comment_icon" />
              <p className="article-comment__comment">
                comments:{comment_count}
              </p>
            </Link>{" "}
          </div>
        </section>
      );
    }
  );
};

export default DisplayAllArticles;
