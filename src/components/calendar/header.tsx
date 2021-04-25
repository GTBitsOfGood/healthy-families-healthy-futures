import React from 'react';

import { Box, Text, Grid } from '@chakra-ui/react';
import { add } from 'date-fns';
import { useLocale } from 'src/contexts/LocaleContext';

interface CalendarHeaderProps {
  startDate: Date;
}

const CalendarHeader = ({ startDate }: CalendarHeaderProps) => {
  const { formatLocale } = useLocale();
  const headers = [];

  for (let i = 0, day = startDate; i < 7; i++) {
    headers.push(
      <Box
        px="8px"
        py={5}
        borderBottom="solid"
        borderBottomColor="gray.light"
        borderBottomWidth="thin"
        key={formatLocale(day, 'EEEE')}
      >
        <Text textStyle="heading2" color="gray.dark" textAlign="center">
          {formatLocale(day, 'EEEEE')}
        </Text>
      </Box>,
    );
    day = add(day, { days: 1 });
  }

  return <Grid templateColumns="repeat(7, 1fr)">{headers}</Grid>;
};

export default CalendarHeader;
