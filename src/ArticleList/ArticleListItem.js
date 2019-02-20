import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage';

class ArticleListItem extends React.Component {
  render() {
    return(
      <li className={styles.container}>
        <ArticleImage
          url={this.props.url}
          title={this.props.title}
          />
      <div>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.shortText}>{this.props.shortText}</div>
        <address className={styles.author}>By: {this.props.author}</address>
        <div className={styles.date}><time dateTime={this.props.year}>{this.props.date}</time></div>
      </div>

      </li>
    )
  }
}


ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ArticleListItem;
