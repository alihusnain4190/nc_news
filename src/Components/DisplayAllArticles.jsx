import { Link } from '@reach/router';
import React from 'react';

const DisplayAllArticles = ({articles,admin}) => {
    console.log(admin);
    return (
        articles.map(({ article_id, title, topic, author, body, votes, comment_count, created_at }) => {
          
            return <div className="article" key={article_id}>
               <Link to={`/articles/${article_id}`}> <h1>title: {title}</h1></Link>
                <h3>topic: {topic}</h3>
                <h3>author: {author}</h3>
                <p>votes:{votes}</p>
                <p>time: {created_at}</p>
            </div>
        })
    );
};

export default DisplayAllArticles;