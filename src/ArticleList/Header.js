import React from 'react';
import styles from './Header.module.css'

function Header (props) {
  const headerText = "The INFO6150 News";
  const date = new Date();
  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const current = weekday[date.getDay()] + ", " + month[date.getMonth()]
  + " " + date.getDate() + ", " + date.getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.text}>{headerText}</div>
      <div className={styles.date}><time>{current}</time></div>
    </div>
  )
}


export default Header
