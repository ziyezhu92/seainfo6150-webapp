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
      	// <Article 
      	// 	title = "The Statue of Liberty's torch heads to new museum"
      	// 	date = "November 22, 2018"
      	// 	author = "Kate Farley">
      	// 	<MarkedUpArticle/>
      	// </Article>
        <ArticleTable articles={articles} />
      </div>
    );
  }
}

export default App;
