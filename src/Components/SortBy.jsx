import React, { Component } from 'react';

class SortBy extends Component {
     state={value:""}
    handleOptionValue = (e) => {    
        e.preventDefault();
        const { value } = e.target;
        this.setState({value:value})
        this.props.handleChange(value)
    }
    render() {
        return (
            <div>
            <select onChange={this.handleOptionValue}>
                <option>Choose your option to sort Data</option>
                <option value="author" >Author</option>
                 <option value="topic">Topics</option>
               </select>
            
        </div>

        );
    }
}

export default SortBy;