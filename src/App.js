import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import MarkedUpArticle from './MarkedUpArticle';

class App extends Component {
  render() {
    return (
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
