import React from 'react';

import { Link } from '@reach/router'
const Navbar = () => {
    return (
        <ul>
            <li><Link to="/topics"><button>Topics</button></Link></li>

            <li><Link to="/articles"><button>Articles</button></Link></li>
            <li><Link to="/users"><button>users</button></Link></li>
        </ul>
    );
};

export default Navbar;