import React, { Component } from 'react';
import {deleteCommentByID} from '../api/api'
class DeleteComment extends Component {
   handleDeleteComment = () => {
       deleteCommentByID(this.props.comment_id).then((resp) => {
            this.props.showCommentAfterDelete(this.props.comment_id);
        }).catch(err => {
                
        })
    }
    render() {
        return (
            <button onClick={this.handleDeleteComment}>delete</button>
        );
    }
}

export default DeleteComment;