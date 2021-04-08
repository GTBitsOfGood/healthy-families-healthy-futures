import React from 'react';

import { Box, Text, VStack, Wrap } from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import PhotoCard from 'src/components/PhotoCard';
import SectionHeader from 'src/components/SectionHeader';
import VideoCard from 'src/components/VideoCard';

interface Props {
  data: GatsbyTypes.MediaGalleryFragment;
}

function MediaGallerySection({ data }: Props): JSX.Element {
  const photoCards = data.allContentfulPhotoCard.nodes;
  const videoCards = data.allContentfulVideoCard.nodes;

  return (
    <Box bg="gray.extralight" p={20}>
      <Box marginBottom={100}>
        <SectionHeader text="Media Gallery" textPosition="left" />
      </Box>
      <VStack align={{ base: 'center', md: 'start' }}>
        <Text textStyle="heading2" color="creamsicle" pl={3}>
          PHOTOS
        </Text>
        <Wrap justify={{ base: 'center', md: 'space-between' }}>
          {photoCards.map(card => (
            <PhotoCard key={card.title} data={card} />
          ))}
        </Wrap>
        <Text textStyle="heading2" color="creamsicle" pl={3}>
          VIDEOS
        </Text>
        <Wrap justify={{ base: 'center', md: 'space-between' }}>
          {videoCards.map(card => (
            <VideoCard key={card.title} data={card} />
          ))}
        </Wrap>
      </VStack>
    </Box>
  );
}

export default MediaGallerySection;

export const fragment = graphql`
  fragment MediaGallery on Query {
    allContentfulPhotoCard {
      nodes {
        ...PhotoCard
      }
    }
    allContentfulVideoCard {
      nodes {
        ...VideoCard
      }
    }
  }
`;
