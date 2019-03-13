import React, { Component } from 'react';

import './App.css';
import Article from './Article';
import MarkedUpArticle from './MarkedUpArticle';
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
      // <div className="App">
      //   <ArticleList articles={articles} />
      // </div>

      //Assignment 3 Part
      <div className="App">
            	<Article
            		title = "The Statue of Liberty's torch heads to new museum"
            		date = "November 22, 2018"
            		author = "Kate Farley">
            		<MarkedUpArticle/>
            	</Article>
      </div>
    );
  }
}

export default App;
