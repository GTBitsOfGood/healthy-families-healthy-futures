import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Text, Button, Box, LinkOverlay } from '@chakra-ui/react';
import { format } from 'date-fns';

interface EventProps {
  event: {
    id: number;
    title: string;
    description: string;
    eventDate: Date;
    link: string;
  };
}

function EventModalCard({ event }: EventProps): JSX.Element {
  return (
    <Box mb={5}>
      <Text textStyle="heading2">{event?.title}</Text>
      <Text textStyle="subheading1">
        {event?.eventDate && format(event?.eventDate, 'EEEE, d MMMM')}
      </Text>
      <Text my={3}>{event?.description}</Text>

      <Button variant="secondary" textAlign="right" ml="auto" mr={0} d="block">
        <LinkOverlay href={event?.link ?? '#'}>
          Learn more <ArrowForwardIcon />
        </LinkOverlay>
      </Button>
    </Box>
  );
}

export default EventModalCard;
