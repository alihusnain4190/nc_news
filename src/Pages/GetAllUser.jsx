import React, { Component } from 'react';
import axios from 'axios';
class Comments extends Component {
   state={users:[]}
    componentDidMount() {
        axios.get('https://husnain4190news.herokuapp.com/api')
    }
    render() {
        return (
            <section>
                
            </section>
            );
    }
}

export default Comments;