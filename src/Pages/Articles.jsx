import React, { Component } from 'react';
import {getArticles,getArticleByID} from '../api/api'
import Loader from '../Components/Loader';
import SearchArticleByID from '../Components/SearchArticleByID';
import SortBy from '../Components/SortBy'
class Articles extends Component {
    state = {
        articles: {},
        isLoading: true,
        error: null,
        sort_by: null,
        article:null
    }
    componentDidMount() {
        getArticles()
            .then(({ data: articles }) => {
                this.setState({articles:articles,isLoading:false})
            })
            .catch(err => {
            })
    }
    componentDidUpdate() {
        
        if (this.state.sort_by) {
            getArticles(this.state.sort_by)
                .then(({ data: articles }) => {
            
                    this.setState({ articles: articles, isLoading: false, })
                });
        }
            if (this.state.article) {
                getArticleByID(this.state.article)

                    .then(({ data: articles }) => {

                       this.setState({ article:articles, isLoading: false, })
                    });
            }
            
       
}
    handleChange = (value) => {
       this.setState({sort_by:value})
    }

    handleSearch = (article_id) => {
        this.setState({article:article_id})
    }
    render() {
        const { articles } = this.state.articles
    
        if (this.state.isLoading) return <Loader></Loader>
        if (this.state.article) { return <h1>oeeeee</h1> }
        else {
            {articles.map(({ article_id, title, topic, author, body, votes, comment_count, created_at }) => {
                return <div className="article" key={article_id}>
                    <h1>title: {title}</h1>
                    <h3>topic: {topic}</h3>
                    <h3>author: {author}</h3>
                    <p>{body}</p>
                    <p>votes:{votes}</p>
                    <p>👍</p>
                    <p>👎</p>
                    <p>time: {created_at}</p>
                </div>
            })}
    
     }
        }
}

export default Articles;