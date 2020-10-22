import React, { Component } from 'react';

class ToggleComment extends Component {
    state = {
        showComment:false
    }
    hadleComment = () => {
        this.setState((prevState) => {
            return {showComment:!prevState.showComment}
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.hadleComment}>Comment </button>
                {this.state.showComment?this.props.children:null}
            </div>
        );
    }
}

export default ToggleComment;