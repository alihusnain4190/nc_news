import React from "react";
import axios from "axios";
const CommentVotes = (props) => {
    
    const handleVote = (voteChange) => {
        props.changeUpdataVote(props.comment_id,voteChange)
        axios
        .patch(`https://husnain4190news.herokuapp.com/api/comments/${props.comment_id}`,{
            inc_votes: parseInt(voteChange),
        }).catch(err => {
            props.changeUpdataVote(props.comment_id,-voteChange)
        })
    };
  
  return (
    <div>
      <button onClick={() => handleVote(1)} value="1">👍</button>
      <button onClick={() => handleVote(-1)} value="-1">👎</button>
    </div>
  );
};

export default CommentVotes;
