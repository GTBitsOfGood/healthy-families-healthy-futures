import React from 'react';

import { useDisclosure } from '@chakra-ui/hooks';
import { Text, VStack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import MediaModal from './MediaModal';

interface Props {
  data: GatsbyTypes.VideoCardFragment;
}

function VideoCard({ data }: Props): JSX.Element {
  const title = data.title;
  const thumbnail = data.thumbnail?.fluid;
  const video = data.videoLink;
  const description = data.description;

  const cardHeight = useBreakpointValue({ base: '144px', md: '200px' });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack
      w={{ base: '155px', md: '300px' }}
      align="stretch"
      _hover={{ cursor: 'pointer' }}
      onClick={onOpen}
    >
      {video && <MediaModal isOpen={isOpen} onClose={onClose} media={video} />}
      <Text textStyle="body2" color="creamsicle.500">
        {title}
      </Text>
      {thumbnail && <Img fluid={thumbnail} style={{ height: cardHeight }} />}
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
    thumbnail {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
    }
    videoLink
    description
  }
`;
