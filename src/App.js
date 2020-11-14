import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Router } from '@reach/router';
import Topics from './Pages/Topics';
import Articles from './Pages/Articles';
import GetAllUser from './Pages/GetAllUser';
import Home from './Pages/Home';
import ArticleByID from './Pages/ArticleByID';
import ErrorDisplay from './Components/ErrorDisplay';


function App() {
  return (
    <div class="app-container">
  
      <Header></Header>
  <main>
      <Router>
        <Home path="/"></Home>
        <Topics path="/topics"></Topics>
        <Articles path="/articles"></Articles>
        <ArticleByID path="/articles/:article_id"/>
          <GetAllUser path="/users"></GetAllUser>
        <ErrorDisplay default status={400} messege="page does not exist" path="/*"></ErrorDisplay>
       </Router>
       </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
