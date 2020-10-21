import React from 'react';

const DisplayAllArticles = ({articles}) => {

    return (
        articles.map(({ article_id, title, topic, author, body, votes, comment_count, created_at }) => {
            console.log(votes);
            return <div className="article" key={article_id}>
                <h1>title: {title}</h1>
                <h3>topic: {topic}</h3>
                <h3>author: {author}</h3>
                
                <p>votes:{votes}</p>
                <p>👍</p>
                <p>👎</p>
                <p>time: {created_at}</p>
            </div>
        })
    );
};

export default DisplayAllArticles;