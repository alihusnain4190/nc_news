import React, { Component } from "react";

class SortBy extends Component {
  state = { value: "" };
  handleOptionValue = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ value: value });
    this.props.handleChange(value);
  };
  render() {
    return (
      <div className="sortBy-article">
      
        <select className="sort-by" onChange={this.handleOptionValue}>
          <option disabled>--sort-by--</option>
          <option value="author">Author</option>
          <option value="topic">Topics</option>
        </select>
      </div>
    );
  }
}

export default SortBy;
