import React from 'react';

import { Box, Grid, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import {
  format,
  startOfMonth,
  endOfMonth,
  sub,
  add,
  isSameMonth,
  parse,
  isSameDay,
} from 'date-fns';
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
  const currDate = new Date();
  const monthYear = format(currDate, 'MMMM y');

  const events = TEMP_EVENTS.map(event => {
    return { ...event, eventDate: parse(event.eventDate, 'EEEE, MMMM do', new Date()) };
  });

  const firstDay = +format(startOfMonth(currDate), 'i') - 1;

  const startDate = sub(endOfMonth(sub(currDate, { months: 1 })), { days: firstDay });

  let endDate = add(startDate, { days: 6 });
  while (isSameMonth(currDate, endDate)) {
    endDate = add(endDate, { weeks: 1 });
  }

  let day = startDate;

  const rows = [];

  while (day <= endDate) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const currEvents = events.filter(event => isSameDay(event.eventDate, day));
      week.push(
        <Box h="130px" py="4px" px="8px" backgroundColor="white">
          <Text textStyle="body1" color="gray.dark" opacity={isSameMonth(day, currDate) ? 1 : 0.5}>
            {format(day, 'dd')}
          </Text>
          {currEvents.map(event => (
            <Box key={event.id} h="25px" w="full" bg="green.500" borderRadius="5px"></Box>
          ))}
        </Box>,
      );
      day = add(day, { days: 1 });
    }

    rows.push(...week);
  }

  const headers = [];

  for (let i = 0, day = startDate; i < 7; i++) {
    headers.push(
      <Box px="8px">
        <Text textStyle="body1" color="gray.dark">
          {format(day, 'EEEEE')}
        </Text>
      </Box>,
    );
    day = add(day, { days: 1 });
  }

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
      <Heading textStyle="heading2" ml="90px" mb="24px" textTransform="uppercase" textAlign="start">
        {monthYear}
      </Heading>
      <SimpleGrid
        mx="40px"
        gridColumnGap="40px"
        gridTemplateAreas={`"headers ."\n"calendar chips"`}
        gridTemplateColumns="1fr 200px"
      >
        <Grid templateColumns="repeat(7, 1fr)" ml="50px" gridArea="headers">
          {headers}
        </Grid>
        <Grid
          ml="50px"
          templateColumns="repeat(7, 1fr)"
          templateRows="repeat(5, 1fr)"
          textAlign="left"
          gap="1px"
          backgroundColor="#E0E0E0"
          border="1px solid #E0E0E0"
          gridArea="calendar"
        >
          {rows}
        </Grid>
        <VStack w="200px" spacing={5} gridArea="chips">
          {eventChips}
        </VStack>
      </SimpleGrid>
    </Box>
  );
}

export default EventCalendarSection;
