import React from 'react';
import Votes from './Votes';

const DisplayAllArticles = ({articles}) => {
    
    return (
        articles.map(({ article_id, title, topic, author, body, votes, comment_count, created_at }) => {
          
            return <div className="article" key={article_id}>
                <h1>title: {title}</h1>
                <h3>topic: {topic}</h3>
                <h3>author: {author}</h3>
                
                <p>votes:{votes}</p>
                
                <p>time: {created_at}</p>
                {/* <Votes votes={votes} article_id={article_id}></Votes> */}
            </div>
        })
    );
};

export default DisplayAllArticles;