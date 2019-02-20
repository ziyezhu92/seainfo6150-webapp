import React, { Component } from 'react';

import './App.css';

import articles from './data/articles.json';
import ArticleList from './ArticleList/ArticleList';


class App extends Component {
  render() {
    return (
      //Assignment 4 part
      // <div className="App">
      //   <ArticleTable articles={articles} />
      // </div>

      //Assignment 5/6 part
      <div className="App">
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
