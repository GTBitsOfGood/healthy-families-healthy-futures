import React from 'react';

import { Box, Heading } from '@chakra-ui/react';
import SectionHeader from 'src/components/SectionHeader';

function EventCalendarSection(): JSX.Element {
  return (
    <Box>
      <Box marginBottom={50}>
        <SectionHeader text="Calendar" textPosition="right" />
      </Box>
      <Box minH={400} textAlign="center">
        <Heading textStyle="heading2">Add Calendar Here</Heading>
      </Box>
    </Box>
  );
}

export default EventCalendarSection;
