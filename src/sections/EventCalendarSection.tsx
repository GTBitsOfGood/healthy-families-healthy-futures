import React from 'react';

import { Box, Grid, SimpleGrid, VStack } from '@chakra-ui/react';
import { format, parse } from 'date-fns';
import Calendar from 'src/components/calendar';
import SectionHeader from 'src/components/SectionHeader';

const TEMP_EVENTS = [
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

function EventCalendarSection(): JSX.Element {
  const events = TEMP_EVENTS.map(event => {
    return { ...event, eventDate: parse(event.eventDate, 'EEEE, MMMM do', new Date()) };
  });

  const eventChips = events.map((e, i) => (
    <Box key={i} bg="green.500" borderRadius="5px" py="2px" px="8px">
      {e.title} - {format(e.eventDate, 'M/dd/yyyy')}
    </Box>
  ));

  return (
    <Box pb="160px">
      <Box marginBottom={50}>
        <SectionHeader text="Calendar" textPosition="right" />
      </Box>
      <SimpleGrid
        mx="40px"
        gridColumnGap="40px"
        gridTemplateAreas={[`"calendar"\n"chips"`, null, `"calendar chips"`]}
        gridTemplateColumns={['1fr', null, '1fr 250px']}
      >
        <Grid ml="50px" gridArea="calendar">
          <Calendar
            eventDates={events.map(event => event.eventDate)}
            onDateClick={(selectedDate: Date) => console.log(selectedDate)}
          />
        </Grid>
        <VStack w="200px" spacing={5} gridArea="chips">
          {eventChips}
        </VStack>
      </SimpleGrid>
    </Box>
  );
}

export default EventCalendarSection;
