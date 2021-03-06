import React, { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Grid, Heading, Circle, Text, IconButton, HStack } from '@chakra-ui/react';
import { startOfMonth, endOfMonth, sub, add, isSameMonth, isSameDay, isBefore } from 'date-fns';
import { useLocale } from 'src/contexts/LocaleContext';

import CalendarHeader from './header';

interface CalendarProps {
  eventDates: Date[];
  onDateClick: (selectedDate: Date) => void;
}

const Calendar = ({ eventDates, onDateClick }: CalendarProps) => {
  const { formatLocale } = useLocale();
  const [month, setMonth] = useState<Date>(startOfMonth(new Date()));

  const monthYear = formatLocale(month, 'MMMM y');

  const firstDay = (+formatLocale(month, 'i') - 1) % 7;

  const startDate =
    firstDay != 6 ? sub(endOfMonth(sub(month, { months: 1 })), { days: firstDay }) : month;

  let endDate = add(startDate, { days: 6 });
  while (isBefore(month, endDate) && isSameMonth(month, endDate)) {
    endDate = add(endDate, { weeks: 1 });
  }

  let day = startDate;

  const rows = [];

  while (day <= endDate) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      // When day is passed directly for onClick, it sets to the latest value of day
      const selectDay = new Date(day);

      const currentDayDisplay = (
        <Text
          textStyle="body1"
          color="gray.dark"
          opacity={isSameMonth(day, month) ? 1 : 0.5}
          cursor="pointer"
          onClick={() => onDateClick(new Date(selectDay))}
        >
          {formatLocale(day, 'd')}
        </Text>
      );

      week.push(
        <Box
          h={['70px', null, '130px']}
          py="4px"
          px="8px"
          backgroundColor="white"
          border="none"
          display="flex"
          justifyContent="center"
          alignItems="center"
          key={formatLocale(day, 'yyyy-MM-dd')}
        >
          {eventDates.filter(eventDay => isSameDay(eventDay, day)).length > 0 ? (
            <Circle size="40px" bg="green.500" cursor="pointer">
              {currentDayDisplay}
            </Circle>
          ) : (
            currentDayDisplay
          )}
        </Box>,
      );
      day = add(day, { days: 1 });
    }

    rows.push(...week);
  }

  return (
    <Box pb={['50px', null, '160px']}>
      <HStack spacing={{ base: '15px', md: '40px' }}>
        <Heading textStyle="heading2" textTransform="uppercase" textAlign="start">
          {monthYear}
        </Heading>
        <HStack spacing="10px">
          <IconButton
            variant="ghost"
            boxSize={{ base: '20px', md: '40px' }}
            aria-label="previous month"
            icon={<ChevronLeftIcon boxSize="20px" />}
            onClick={() => setMonth(currMonth => startOfMonth(sub(currMonth, { days: 1 })))}
          />
          <IconButton
            variant="ghost"
            boxSize={{ base: '20px', md: '40px' }}
            aria-label="next month"
            icon={<ChevronRightIcon boxSize="20px" />}
            onClick={() =>
              setMonth(currMonth => startOfMonth(add(endOfMonth(currMonth), { days: 1 })))
            }
          />
        </HStack>
      </HStack>
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
