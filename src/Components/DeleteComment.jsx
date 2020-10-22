import React, { Component } from 'react';
import {deleteCommentByID} from '../api/api'
class DeleteComment extends Component {
  
    handleDeleteComment = () => {
        console.log(this.props.comment_id)
      
        deleteCommentByID(this.props.comment_id).then((resp) => {
            console.log(resp);
            this.props.showCommentAfterDelete(this.props.comment_id);
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <button onClick={this.handleDeleteComment}>delete</button>
        );
    }
}

export default DeleteComment;