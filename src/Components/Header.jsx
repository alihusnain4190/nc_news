import React from 'react'

import Navbar from './Navbar'
const Header = () => {
    return <header className="header">
        this is a header
        <Navbar></Navbar> 
        <ul>
            {/* <li><Link>Topic</Link></li>
            <li><Link>Article</Link></li>
            <li><Link>Comment</Link></li> */}
        </ul>
    </header>
}
export default Header;