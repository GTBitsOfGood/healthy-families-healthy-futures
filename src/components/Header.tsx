import React from 'react';

import { Box, Button } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import styles from '../css/Header.module.css';

function Header(): JSX.Element {
  const data: GatsbyTypes.HeaderQueryQuery = useStaticQuery<GatsbyTypes.HeaderQueryQuery>(graphql`
    query HeaderQuery {
      contentfulAsset(title: { eq: "Logo" }) {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
        description
      }
    }
  `);

  return (
    <div className={styles.navigation}>
      <Box w="150px">
        {data.contentfulAsset?.fluid != null ? (
          <Img fluid={data.contentfulAsset.fluid} alt={data.contentfulAsset.description} />
        ) : null}
      </Box>
      <input
        className={styles.search}
        type="text"
        id="header-search"
        placeholder="search website"
        name="s"
      />
      <p className={styles.getInvolved}>GET INVOLVED</p>
      <Button variant="primary">Donate</Button>
    </div>
  );
}

export default Header;
