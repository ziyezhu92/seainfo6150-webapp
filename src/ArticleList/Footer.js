import React from 'react';
import styles from './Footer.module.css';

function Footer (props) {
  const footerText = "© 2019, Ziye Zhu";
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {footerText}
      </div>
    </div>
  )
}

export default Footer;
