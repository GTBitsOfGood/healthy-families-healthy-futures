import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Text, Heading, LinkOverlay, LinkBox } from '@chakra-ui/react';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';
import { Event } from 'src/utils/types';
import { useMiscText } from 'src/utils/useMiscText';

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  const { name, start_time, url, image } = event;
  const { formatLocale } = useLocale();

  return (
    <LinkBox>
      <Box bg="white" margin={[10, null, 20]}>
        <Heading textStyle="heading2">
          {name} - {formatLocale(start_time, 'EEEE, MMMM do')}
        </Heading>

        <Box h={300} bg="gray" my={5}>
          {image == null ? null : (
            <Img
              fluid={image}
              alt={''}
              style={{ height: '100%' }}
              imgStyle={{ objectFit: 'cover' }}
            />
          )}
        </Box>

        <LinkOverlay href={url} isExternal>
          <Text textStyle="body1" textAlign="right" _hover={{ color: '#65BF73' }}>
            {useMiscText().learnMore} <ArrowForwardIcon />
          </Text>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
};

export default EventCard;
