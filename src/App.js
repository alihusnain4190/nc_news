import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Router } from '@reach/router';
import Topics from './Pages/Topics';
import Articles from './Pages/Articles';
import Comments from './Pages/Commnets';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Home path="/"></Home>
        <Topics path="/topics"></Topics>
        <Articles path="/articles"></Articles>
        <Comments path="/comments"></Comments>
  
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
