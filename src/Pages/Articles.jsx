import { Link,navigate, Router } from '@reach/router';
import React, { Component } from 'react';
import {getArticles,getArticleByID} from '../api/api'
import CommentByArticle from '../Components/CommentByArticle'
import DisplayAllArticles from '../Components/DisplayAllArticles';
import DisplayArticle from '../Components/DisplayArticle';
import Loader from '../Components/Loader';
import SearchArticleByID from '../Components/SearchArticleByID';
import SortBy from '../Components/SortBy'
import ToggleComment from '../Components/ToggleComment';
import ArticleByID from './ArticleByID'
class Articles extends Component {
    state = {
        articles: {},
        isLoading: true,
        error: null,
        sort_by: null,
      
        article_id:null
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
}
    handleChange = (value) => {
       this.setState({sort_by:value})
    }

    handleSearch = (article_id) => {
        // this.setState({article_id:article_id})

        navigate(`/articles/${article_id}`);
    }
    render() {
        let { articles } = this.state.articles;
        const {article_id}=this.state
        if (this.state.isLoading) return <Loader></Loader>

        // if (article_id) {
        //     articles = articles.filter((article) => {
        //         console.log(article_id);
        //         if (Number(article_id) === article.article_id) {
        //             return true;
        //         }
        //  })
            
        // }
        return (
            <section >
                <SortBy handleChange={this.handleChange}></SortBy>
                <SearchArticleByID handleSearch={this.handleSearch}> </SearchArticleByID>
                    
                <Router>
                 <DisplayAllArticles path="/" articles={articles}></DisplayAllArticles>
                    <ArticleByID path="/:article_id"></ArticleByID>
               </Router>   
               
     
            </section>
          
      ) 
      
     }
        }


export default Articles;
