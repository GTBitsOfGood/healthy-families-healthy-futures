import React from 'react';

import { Text, VStack } from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.PhotoCardFragment;
}

function PhotoCard({ data }: Props): JSX.Element {
  const title = data.title;
  const image = data.image?.fluid;
  const description = data.description;

  return (
    <VStack minW="xs" align="stretch" p={5}>
      <Text textStyle="body2" color="creamsicle">
        {title}
      </Text>
      {image && <Img fluid={image} style={{ height: '300px' }} />}
      <Text textStyle="body2" fontWeight="bold">
        {description}
      </Text>
    </VStack>
  );
}

export default PhotoCard;

export const fragment = graphql`
  fragment PhotoCard on ContentfulPhotoCard {
    title
    image {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
    }
    description
  }
`;
