import React, { Component } from 'react';

import './App.css';
import Article from './Article';
import MarkedUpArticle from './MarkedUpArticle';

import List from './List';
import AddingMachine from './AddingMachine';
import ArticleTable from './ArticleTable';
import articles from './data/articles.json';


class App extends Component {
  render() {
    return (
      <div className="App">

        <ArticleTable articles={articles} />

      </div>
    );
  }
}

export default App;
