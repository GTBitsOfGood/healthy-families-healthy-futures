import React from 'react';

import { Text, VStack } from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.VideoCardFragment;
}

function VideoCard({ data }: Props): JSX.Element {
  const title = data.title;
  const video = data.video?.fluid;
  const description = data.description;

  return (
    <VStack minW="xs" align="stretch" p={5}>
      <Text textStyle="body2" color="creamsicle">
        {title}
      </Text>
      {video && <Img fluid={video} style={{ height: '300px' }} />}
      <Text textStyle="body2" fontWeight="bold">
        {description}
      </Text>
    </VStack>
  );
}

export default VideoCard;

export const fragment = graphql`
  fragment VideoCard on ContentfulVideoCard {
    title
    video {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
    }
    description
  }
`;
