import React from 'react';

const ErrorDisplay = (props) => {
    return (
        <div>
          <p>
            Error. {props.msg}. {props.status}
          </p>
        </div>
      )
};

export default ErrorDisplay;