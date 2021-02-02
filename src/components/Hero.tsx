import React from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from '../css/Hero.module.css';

interface Props {
  data: GatsbyTypes.HeroFragment;
}

function Hero({ data }: Props): JSX.Element {
  return (
    <div className={styles.hero}>
      {data.image?.fluid == null ? (
        <p>Missing image!</p>
      ) : (
        <Img className={styles.heroImage} alt={data.name} fluid={data.image?.fluid} />
      )}
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <p className={styles.heroTitle}>{data.title}</p>
        <p>{data.shortBio?.shortBio}</p>
      </div>
    </div>
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
