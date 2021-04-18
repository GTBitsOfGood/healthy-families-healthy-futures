import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Text, Button, Box, LinkOverlay } from '@chakra-ui/react';
import { format } from 'date-fns';
import { Event } from 'src/utils/types';

interface EventProps {
  event: Event;
}

function EventModalCard({ event }: EventProps): JSX.Element {
  return (
    <Box mb={5}>
      <Text textStyle="heading2">{event.name}</Text>
      <Text textStyle="subheading1">{format(event.start_time, 'EEEE, d MMMM')}</Text>
      <Text my={3}>{event.description}</Text>

      <Button variant="secondary" textAlign="right" ml="auto" mr={0} d="block">
        <LinkOverlay href={`https://www.facebook.com/events/${event.id}` ?? '#'} isExternal>
          Learn more <ArrowForwardIcon />
        </LinkOverlay>
      </Button>
    </Box>
  );
}

export default EventModalCard;
