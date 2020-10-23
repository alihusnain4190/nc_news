import React from 'react';
import {navigate } from '@reach/router';

const handleBack = (props) => {
   navigate(`/`)
}
const BackButton = () => {
    
    return (
        <button onClick={handleBack}>GoHome</button>
    );
};

export default BackButton;