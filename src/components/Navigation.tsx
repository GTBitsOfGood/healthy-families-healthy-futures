import React from 'react';

import { Link } from 'gatsby';

import styles from '../css/Navigation.module.css';

function Navigation(): JSX.Element {
  return (
    <nav role="navigation">
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/recipes/">Recipes</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/donations/">Donate</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/events-and-classes/">Events & Classes</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/">Blog</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/resources/">Resources</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
