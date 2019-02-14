import React, { Component } from 'react';

import './App.css';
import Article from './Article';
import MarkedUpArticle from './MarkedUpArticle';

import List from './List';
import AddingMachine from './AddingMachine';
import ArticleTable from './ArticleTable';
import articles from './data/articles.json';
import ArticleList from './ArticleList/ArticleList';


class App extends Component {
  render() {
    return (
      //Assignment 4 part
      // <div className="App">
      //   <ArticleTable articles={articles} />
      // </div>

      //Assignment 5 part
      <div className="App">
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
