import React from 'react';

import { Button, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from '../css/Header.module.css';
// import logo from '../img/logo.png';

function Header(): JSX.Element {
  return (
    <div className={styles.navigation}>
      {/* <img className={styles.logo} src={logo} alt="Healthy Families Healthy Futures Logo" /> */}
      <input
        className={styles.search}
        type="text"
        id="header-search"
        placeholder="search website"
        name="s"
      />
      <p className={styles.getInvolved}>GET INVOLVED</p>
      <Button className={styles.donateButton} colorScheme="green">
        DONATE
      </Button>
    </div>
  );
}

export default Header;
