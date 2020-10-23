import {navigate } from '@reach/router';
import React, { Component } from 'react';
import {getArticles,getArticleByID} from '../api/api'
import DisplayAllArticles from '../Components/DisplayAllArticles';
import Loader from '../Components/Loader';
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
            .then(({ data: articles }) => {
             //Total Count and pagination problem
                this.setState({ articles: articles, isLoading: false })
            })
            .catch(err => {
            })
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.sort_by !== this.state.sort_by ||  prevState.page !== this.state.page) {
            getArticles(this.state.sort_by,this.state.page)
                .then(({ data: articles  }) => {
                    this.setState({ articles: articles, isLoading: false, })
                });
        }
    }
    

    changePage = (newPage) => {
        this.setState({ page: newPage });
      };

    handleChange = (value) => {
       this.setState({sort_by:value})
    }

    handleSearch = (article_id,admin) => {
       
        navigate(`/articles/${article_id}`,{ state:{admin: admin }});
    }
    render() {
        // console.log(this.props.location.state.admin)

        let { articles } = this.state.articles;
        if (this.state.isLoading) return <Loader></Loader>
        return (
            <div>
            <section>
                <SortBy handleChange={this.handleChange}></SortBy>
                <SearchArticleByID admin={this.props.location.state.admin} handleSearch={this.handleSearch}> </SearchArticleByID>
                <DisplayAllArticles path="/" articles={articles}></DisplayAllArticles>
                </section>
            </div>)
     }
        }


export default Articles;
