import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from '../css/Hero.module.css';

interface Props {
  data: GatsbyTypes.HeroFragment;
}

function Hero({ data }: Props): JSX.Element {
  return (
    <Box pos="relative" textAlign="center">
      {data.image?.fluid == null ? (
        <p>Missing image!</p>
      ) : (
        <Img className={styles.heroImage} alt={data.name} fluid={data.image?.fluid} />
      )}
      <Box
        bg="rgba(0, 0, 0, 0.7)"
        px="2"
        pos="absolute"
        left="50%"
        bottom="0"
        transform="translateX(-50%)"
        color="white"
      >
        <Heading textStyle="h2">{data.name}</Heading>
        <Text className={styles.heroTitle}>{data.title}</Text>
        <Text>{data.shortBio?.shortBio}</Text>
      </Box>
    </Box>
  );
}

export default Hero;

export const fragment = graphql`
  fragment Hero on ContentfulPerson {
    name
    shortBio {
      shortBio
    }
    title
    image {
      fluid(maxWidth: 1180, maxHeight: 480, resizingBehavior: PAD, background: "rgb:000000") {
        ...GatsbyContentfulFluid
      }
    }
  }
`;
