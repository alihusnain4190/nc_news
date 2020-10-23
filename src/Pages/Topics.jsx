import React, { Component } from 'react';

import { getTopics } from '../api/api';
import Loader from '../Components/Loader'
class Topics extends Component {
    state={
    topics:[],
    isLoading: true
    }
 async   componentDidMount() {
        try {
            const topics = await getTopics()
            console.log(topics);
                    this.setState({topics:{topics},isLoading:false})
            }
        catch (err) {
            console.log(err)
             }   
                }
    render() {
        const { topics } = this.state.topics;
        if(this.state.isLoading)return <Loader/>
        return (
            <section className="topics">
                <h1>Information about topics</h1>
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
                </section>

               
        );
    }
}

export default Topics;