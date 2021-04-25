import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Text, Button, Box, LinkOverlay } from '@chakra-ui/react';
import { useLocale } from 'src/contexts/LocaleContext';
import { Event } from 'src/utils/types';

interface EventProps {
  event: Event;
}

function EventModalCard({ event }: EventProps): JSX.Element {
  const { formatLocale } = useLocale();
  return (
    <Box mb={5}>
      <Text textStyle="heading2">{event.name}</Text>
      <Text textStyle="subheading1">{formatLocale(event.start_time, 'EEEE, d MMMM')}</Text>
      <Text my={3}>{event.description}</Text>

      <Button variant="secondary" textAlign="right" ml="auto" mr={0} d="block">
        <LinkOverlay href={event.url} isExternal>
          Learn more <ArrowForwardIcon />
        </LinkOverlay>
      </Button>
    </Box>
  );
}

export default EventModalCard;
