import { Link,navigate, Router } from '@reach/router';
import React, { Component } from 'react';
import {getArticles,getArticleByID} from '../api/api'
import CommentByArticle from '../Components/CommentByArticle'
import DisplayAllArticles from '../Components/DisplayAllArticles';
import DisplayArticle from '../Components/DisplayArticle';
import Loader from '../Components/Loader';
import Pagination from '../Components/Pagination';
import SearchArticleByID from '../Components/SearchArticleByID';
import SortBy from '../Components/SortBy'
class Articles extends Component {
    state = {
        articles: {},
        isLoading: true,
        error: null,
        sort_by: null,
        page:1,
        article_id:null,
        total_count:0
    }
    componentDidMount() {
        getArticles(this.state.sort_by,this.state.page)
            .then(({ data: articles,total_count }) => {
             //Total Count and pagination problem
                this.setState({ articles: articles, total_count: total_count, isLoading: false })
            })
            .catch(err => {
            })
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.sort_by !== this.state.sort_by ||  prevState.page !== this.state.page) {
            getArticles(this.state.sort_by,this.state.page)
                .then(({ data: articles ,total_count }) => {
                    this.setState({ articles: articles,total_count:total_count, isLoading: false, })
                });
        }
    }
    

    changePage = (newPage) => {
        this.setState({ page: newPage });
      };

    handleChange = (value) => {
       this.setState({sort_by:value})
    }

    handleSearch = (article_id) => {
        // this.setState({article_id:article_id})

        navigate(`/articles/${article_id}`);
    }
    render() {
        let { articles } = this.state.articles;
        console.log(this.state.total_count);
        // console.log('ali hsuain')
        // const { total_count ,page } = this.state;
        // const articlesPerPage = 10;
        // const pageCount = Math.ceil(total_count / articlesPerPage);
        // const atStart = page === 1;
        // const atEnd = page === pageCount;
        // console.log(this.pageCount);
        // const pages = Array.from({ length: pageCount }).map((item, i) => i + 1);
        // console.log(pages)
        if (this.state.isLoading) return <Loader></Loader>
        return (
            <div>
            <section>
                <SortBy handleChange={this.handleChange}></SortBy>
                <SearchArticleByID handleSearch={this.handleSearch}> </SearchArticleByID>
                <DisplayAllArticles path="/" articles={articles}></DisplayAllArticles>
                </section>
        
        {/* <Pagination
          page={page}
          atStart={atStart}
          atEnd={atEnd}
          pages={pages}
          changePage={this.changePage}
        /> */}
            </div>)
     }
        }


export default Articles;
