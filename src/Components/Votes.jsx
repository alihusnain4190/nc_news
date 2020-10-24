import React from "react";
import axios from "axios";
const Votes = ({ article_id, votes, changeUpdataVote }) => {
  const btn = {
    backgroundColor: "#2E4372",
  };

  const handleVote = (voteChange) => {
    changeUpdataVote(article_id, voteChange);

    axios
      .patch(
        `https://husnain4190news.herokuapp.com/api/articles/${article_id}`,
        {
          inc_votes: parseInt(voteChange),
        }
      )
      .catch((err) => {
        changeUpdataVote(article_id, -voteChange);
      });
  };

  return (
    <div className="votes">
      <span
        onClick={() => handleVote(1)}
        value="1"
        className="votes__thumbsup"
        role="img"
        aria-label="thumbsup"
      >
        👍
      </span>
      &nbsp;
      <span
        onClick={() => handleVote(-1)}
        className="votes__thumbsdown"
        role="img"
        aria-label="thumbsdown"
      >
        👎
      </span>
    </div>
  );
};

export default Votes;
