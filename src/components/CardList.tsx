import React, { ReactNode, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';

interface Props {
  children: ReactNode[];
}

const CardList = ({ children }: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  const numCards = useBreakpointValue({ base: 2, lg: 3, xl: 4 }) ?? 4;

  const hasPrev = startIndex !== 0;
  const hasNext = startIndex + numCards < children.length;

  const next = () => {
    setStartIndex(startIndex + 2);
  };

  const prev = () => {
    setStartIndex(startIndex - 2);
  };

  return (
    <Flex w="full" justifyContent="center" alignItems="center">
      {hasPrev && (
        <Center
          w={{ base: '27px', md: '60px' }}
          h={{ base: '52px', md: '100px' }}
          mr={{ base: '-15px', md: '-30px' }}
          bg="charcoal"
          cursor="pointer"
          zIndex={3}
          onClick={prev}
        >
          <ChevronLeftIcon boxSize="24px" color="white" />
        </Center>
      )}
      <HStack spacing="40px" ml={!hasPrev ? '30px' : ''} mr={!hasNext ? '30px' : ''}>
        {children
          .map((card, i) => <Box key={i}>{card}</Box>)
          .filter((_, i) => i >= startIndex && i < startIndex + numCards)}
      </HStack>
      {hasNext && (
        <Center
          w={{ base: '27px', md: '60px' }}
          h={{ base: '52px', md: '100px' }}
          ml={{ base: '-15px', md: '-30px' }}
          zIndex={3}
          bg="charcoal"
          cursor="pointer"
          onClick={next}
        >
          <ChevronRightIcon boxSize="24px" color="white" />
        </Center>
      )}
    </Flex>
  );
};

export default CardList;
