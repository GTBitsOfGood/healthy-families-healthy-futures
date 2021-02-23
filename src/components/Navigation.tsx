import React from 'react';

import { Link } from 'gatsby';

import styles from '../css/Navigation.module.css';

function Navigation(): JSX.Element {
  return (
    <nav role="navigation">
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">HOME</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about">ABOUT</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/recipes/">RECIPES</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/donations/">DONATE</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/events-and-classes/">EVENTS & CLASSES</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/">BLOG</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/resources/">RESOURCES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
