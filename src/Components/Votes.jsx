import React from "react";
import axios from "axios";
const Votes = ({article_id,votes,changeUpdataVote}) => {
    
    const handleVote = (voteChange) => {
        changeUpdataVote(article_id,voteChange)

    axios
        .patch(`https://husnain4190news.herokuapp.com/api/articles/${article_id}`,{
            inc_votes: parseInt(voteChange),
        }).catch(err => {
            changeUpdataVote(article_id,-voteChange)
        });
  };
  return (
    <div>
      <button onClick={() => handleVote(1)} value="1">👍</button>
      <button onClick={() => handleVote(-1)} value="-1">👎</button>
    </div>
  );
};

export default Votes;
