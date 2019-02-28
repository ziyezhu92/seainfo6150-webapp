import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Header from './Header';
import styles from './HomePage.module.css';
import Footer from './Footer';

const HomePage = ({ articles }) => (
  <div className={styles.container}>
    <Header />
    <ArticleList articles={articles} />
    <Footer />
  </div>
);

HomePage.propTypes = {
  articles: PropTypes.object.isRequired
}

export default HomePage;
