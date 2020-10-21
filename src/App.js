import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Router } from '@reach/router';
import Topics from './Pages/Topics';
import Articles from './Pages/Articles';
import Comments from './Pages/Commnets';
import Home from './Pages/Home';
import DisplayArticle from './Components/DisplayArticle';
import ArticleByID from './Pages/ArticleByID';
import ErrorDisplay from './Components/ErrorDisplay';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Home path="/"></Home>
        <Topics path="/topics"></Topics>
        <Articles path="/articles/*"></Articles>
        <Comments path="/comments"></Comments>
        {/* <ErrorDisplay default status={400} messege="page does not exist"></ErrorDisplay> */}
       </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
