import React from 'react';

const ShowUser = (props) => {
    console.log(props)
    return (
        <div>
            <h2> admin name {props.name}</h2>
            <img src={props.avatar_url} alt="admin pcs"></img>
        </div>
    );
};

export default ShowUser;