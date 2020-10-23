import React from 'react';

const ErrorDisplay = (props) => {
    return (
        <div>
          <p>
       Something is wrong with Error. {props.msg}. {props.status}
        </p>
        </div>
      )
};

export default ErrorDisplay;