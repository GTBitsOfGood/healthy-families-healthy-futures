import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import EventCard from 'src/components/EventCard';
import SectionHeader from 'src/components/SectionHeader';

function EventsSection(): JSX.Element {
  // TODO - Retrieve events from Contenful or Facebook
  const events = [
    {
      id: 1,
      title: 'Healthy Cooking Class',
      eventDate: 'Wednesday, April 17th',
      link: '#',
    },
    {
      id: 2,
      title: 'Healthy Cooking Class',
      eventDate: 'Wednesday, April 24th',
      link: '#',
    },
  ];

  return (
    <Box>
      <Box marginBottom={50}>
        <SectionHeader text="Upcoming Events" textPosition="left" />
      </Box>
      <Flex direction="column">
        {events.map(event => (
          <EventCard key={event.id} data={event} />
        ))}
      </Flex>
    </Box>
  );
}

export default EventsSection;
