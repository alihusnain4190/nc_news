import React, { Component } from "react";

class SearchArticleByID extends Component {
  state = {
    article_id: "",
  };
  handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ article_id: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.article_id, this.props.admin);
  };
  render() {
    // console.log(this.props.admin)
    return (
      <div className="search-article">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="article_id">
            <input
              onChange={this.handleChange}
              placeholder="searchBy ID"
              name="article_id"
              id="article_id"
            ></input>
          </label>
          <button className="search-vote-btn">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchArticleByID;
