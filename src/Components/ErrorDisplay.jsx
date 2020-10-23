import { navigate } from '@reach/router';
import React from 'react';

const ErrorDisplay = (props) => {
    return (
        <div>
          <p>
       Something is wrong with Error. {props.msg}. {props.status}
        </p>
      {/* <navigate to="/"><button>Go Back Home</button></navigate> */}
        </div>
      )
};

export default ErrorDisplay;