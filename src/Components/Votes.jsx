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
      <button onClick={() => handleVote(1)} value="1"> <span role="img" aria-label="thumbsup" >👍</span></button>
      <button onClick={() => handleVote(-1)} value="-1"><span role="img" aria-label="thumbsdown" >👎</span></button>
    </div>
  );
};

export default Votes;
