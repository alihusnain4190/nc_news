import React, { Component } from 'react';

import { getTopics } from '../api/api';
import Loader from '../Components/Loader'
class Topics extends Component {
    state={
    topics:{},
    isLoading: true
    }
    componentDidMount() {
    getTopics()
         .then(({ data: topics }) => {
                this.setState({topics:topics,isLoading:false})
            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        const { topics } = this.state.topics;
        if(this.state.isLoading)return <Loader></Loader>
        return (
            <table>
                <thead>
                    <tr>
                    <th>Slug</th>

                    <th>Description</th>

                    </tr>
                </thead>
                <tbody>
                {topics.map(({slug,description},index) => {
                  
                    return <tr key={index}>
                        <td>{slug}</td>
                        <td>
                            {description}
                        </td></tr>
                })}
                </tbody>   
            </table>
               
        );
    }
}

export default Topics;