import { navigate } from "@reach/router";
import React, { Component } from "react";
import { getArticles } from "../api/api";
import DisplayAllArticles from "../Components/DisplayAllArticles";
import Loader from "../Components/Loader";
import ErrorDisplay from "../Components/ErrorDisplay";
import SearchArticleByID from "../Components/SearchArticleByID";
import SortBy from "../Components/SortBy";
import ShowUser from "../Components/ShowUser";
class Articles extends Component {
  state = {
    articles: {},
    isLoading: true,
    error: null,
    sort_by: null,
    page: 1,
    article_id: null,
    admin: "",
  };
  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ admin: this.props.location.state.admin });
    }
      
    getArticles(this.state.sort_by, this.state.page)
      .then(({ data: articles }) => {
        //Total Count and pagination problem
        this.setState({ articles: articles, isLoading: false });
      })
      .catch(({ response }) => {
        console.log(response);
        this.setState({
          //   error: {
          //     status: response.status,
          //     messege: response.data.msg,
          //   },
          //   isLoading: false,
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.page !== this.state.page
    ) {
      getArticles(this.state.sort_by, this.state.page)
        .then(({ data: articles }) => {
          this.setState({ articles: articles, isLoading: false });
        })
        .catch(({ response }) => {
          //   this.setState({
          //     error: {
          //       status: response.status,
          //       messege: response.data.msg,
          //     },
          //     isLoading: false,
          //   });
        });
    }
  }

  changePage = (newPage) => {
    this.setState({ page: newPage });
  };

  handleChange = (value) => {
    this.setState({ sort_by: value });
  };

  handleSearch = (article_id, admin) => {
    navigate(`/articles/${article_id}`, { state: { admin: admin } });
  };
  render() {
    // console.log(this.props.location.state.admin)

    let { articles } = this.state.articles;
    //   console.log(this.props);
      console.log(this.state.admin)
    if (this.state.error)
      return (
        <ErrorDisplay
          msg={this.state.error.messege}
          status={this.state.error.status}
        ></ErrorDisplay>
      );
    if (this.state.isLoading) return <Loader></Loader>;

    return (
      <div>
        <section>
          <SortBy handleChange={this.handleChange}></SortBy>
          <SearchArticleByID
            admin={this.state.admin}
            handleSearch={this.handleSearch}
          >
            {" "}
          </SearchArticleByID>
          <DisplayAllArticles articles={articles}  admin={this.state.admin}></DisplayAllArticles>
        </section>
      </div>
    );
  }
}

export default Articles;
