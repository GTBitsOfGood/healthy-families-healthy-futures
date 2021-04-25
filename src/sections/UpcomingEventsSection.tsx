import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import EventCard from 'src/components/EventCard';
import SectionHeader from 'src/components/SectionHeader';
import { Event } from 'src/utils/types';

interface Props {
  events: Event[];
}

function UpcomingEventsSection({ events }: Props): JSX.Element {
  return (
    <Box>
      <Box marginBottom={50}>
        <SectionHeader text="Upcoming Events" textPosition="left" />
      </Box>
      <Flex direction="column" align="center">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </Flex>
    </Box>
  );
}

export default UpcomingEventsSection;
