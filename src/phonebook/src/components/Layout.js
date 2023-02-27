import React from "react";
import styles from './Layout.module.css'
const Layout = (props) => {
  return (
    <div>
      <h3 className={styles.h1on}>PhoneBook</h3>
      <div className={styles.container}>{props.children}</div>
      <div>
      
      </div>
    </div>
  );
};

export default Layout
