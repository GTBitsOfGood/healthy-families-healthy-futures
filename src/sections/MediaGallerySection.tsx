import React from 'react';

import { Box, Text, VStack } from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import CardList from 'src/components/CardList';
import PhotoCard from 'src/components/PhotoCard';
import SectionHeader from 'src/components/SectionHeader';
import VideoCard from 'src/components/VideoCard';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.MediaGalleryFragment;
}

function MediaGallerySection({ data }: Props): JSX.Element {
  const { filterLocale } = useLocale();

  const photoCards = filterLocale(data.allContentfulPhotoCard.nodes);
  const videoCards = filterLocale(data.allContentfulVideoCard.nodes);

  return (
    <Box bg="gray.extralight" pb="100px">
      <Box mb={{ base: '35px', md: '54px' }}>
        <SectionHeader text="Media Gallery" textPosition="left" />
      </Box>
      <VStack align={{ base: 'start', md: 'start' }} spacing="45px">
        <Text
          textStyle="heading2"
          color="creamsicle.500"
          pl={{ base: '17px', md: '70px' }}
          textTransform="uppercase"
        >
          Photos
        </Text>
        <CardList>
          {photoCards.map(card => (
            <PhotoCard key={card.title} data={card} />
          ))}
        </CardList>
        <Text
          textStyle="heading2"
          color="creamsicle.500"
          pl={{ base: '17px', md: '70px' }}
          textTransform="uppercase"
        >
          Videos
        </Text>
        <CardList>
          {videoCards.map(card => (
            <VideoCard key={card.title} data={card} />
          ))}
        </CardList>
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
        node_locale
      }
    }
    allContentfulVideoCard {
      nodes {
        ...VideoCard
        node_locale
      }
    }
  }
`;
