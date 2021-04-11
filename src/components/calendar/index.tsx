import React from 'react';

import { Box, Grid, Heading, Circle, Text } from '@chakra-ui/react';
import { format, startOfMonth, endOfMonth, sub, add, isSameMonth, isSameDay } from 'date-fns';

import CalendarHeader from './header';

interface CalendarProps {
  eventDates: Date[];
  onDateClick: (selectedDate: Date) => void;
}

const Calendar = ({ eventDates, onDateClick }: CalendarProps) => {
  const currDate = new Date();
  const monthYear = format(currDate, 'MMMM y');

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
      const currentDay = (
        <Text
          textStyle="body1"
          color="gray.dark"
          opacity={isSameMonth(day, currDate) ? 1 : 0.5}
          cursor="pointer"
          onClick={() => onDateClick(day)}
        >
          {format(day, 'd')}
        </Text>
      );

      week.push(
        <Box
          h="130px"
          py="4px"
          px="8px"
          backgroundColor="white"
          border="none"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {eventDates.filter(eventDay => isSameDay(eventDay, day)).length > 0 ? (
            <Circle size="40px" bg="green.500" cursor="pointer">
              {currentDay}
            </Circle>
          ) : (
            currentDay
          )}
        </Box>,
      );
      day = add(day, { days: 1 });
    }

    rows.push(...week);
  }

  return (
    <Box pb="160px">
      <Heading textStyle="heading2" mb="24px" textTransform="uppercase" textAlign="start">
        {monthYear}
      </Heading>
      <CalendarHeader startDate={startDate} />
      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(5, 1fr)"
        textAlign="left"
        gap="1px"
        backgroundColor="white"
      >
        {rows}
      </Grid>
    </Box>
  );
};

export default Calendar;
