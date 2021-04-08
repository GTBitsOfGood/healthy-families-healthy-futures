import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Text, Heading } from '@chakra-ui/react';
import { Link } from 'gatsby';

interface Props {
  data: {
    id: number;
    title: string;
    eventDate: string;
    link: string;
  };
}

const EventCard = ({ data }: Props) => {
  const { title, eventDate, link } = data;

  return (
    <Box bg="white" margin={[10, null, 20]}>
      <Heading textStyle="heading2">
        {title} - {eventDate}
      </Heading>

      <Box h={300} bg="gray" my={5}>
        {/* Replace with event image */}
      </Box>

      <Link to={link}>
        <Text textStyle="body1" textAlign="right" _hover={{ color: '#65BF73' }}>
          Learn more <ArrowForwardIcon />
        </Text>
      </Link>
    </Box>
  );
};

export default EventCard;
