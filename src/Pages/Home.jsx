import React from 'react';
import { Link } from '@reach/router'
const Home = () => {
    return (
        <main>
            <p>News and article about Student</p>
            <section className="news">
                <div className="topics">
                    <h1>Topics</h1>
                    <p>Information about student topics</p>
                  <Link to="/topics"><button>Topics</button> </Link>  
                </div>
                <div className="articles">
                <h1>articles</h1>
                                <p>Information about student articles</p>
                  <Link to="/articles"><button>articles</button> </Link>  
                </div>
                <div className="comments">  <h1>comments</h1>
                    <p>Information about student comments</p>
                    <Link to="/comments"><button>comments</button> </Link>
                </div>
           
            </section>
        </main>
    );
};

export default Home;