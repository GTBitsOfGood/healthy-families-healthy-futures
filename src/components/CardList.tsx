import React, { ReactNode, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';

interface Props {
  children: ReactNode[];
}

const CardList = ({ children }: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  const numCards = useBreakpointValue({ base: 2, lg: 3, xl: 4 }) ?? 4;

  const hasPrev = startIndex > 0;
  const hasNext = startIndex + numCards < children.length;

  const next = () => {
    setStartIndex(Math.min(startIndex + 2, children.length - numCards));
  };

  const prev = () => {
    setStartIndex(Math.max(startIndex - 2, 0));
  };

  return (
    <Flex w="full" justifyContent="center" alignItems="center" px={{ base: '18px', md: 0 }}>
      {hasPrev && (
        <Center
          w={{ base: '27px', md: '60px' }}
          h={{ base: '52px', md: '100px' }}
          mr={{ base: '-13.5px', md: '-30px' }}
          bg="charcoal"
          cursor="pointer"
          zIndex={3}
          onClick={prev}
        >
          <ChevronLeftIcon boxSize="24px" color="white" />
        </Center>
      )}
      <HStack
        alignItems="start"
        spacing="40px"
        pl={!hasPrev ? { base: '14px', md: '30px' } : ''}
        pr={!hasNext ? { base: '14px', md: '30px' } : ''}
      >
        {children
          .map((card, i) => <Box key={i}>{card}</Box>)
          .filter((_, i) => i >= startIndex && i < startIndex + numCards)}
      </HStack>
      {hasNext && (
        <Center
          w={{ base: '27px', md: '60px' }}
          h={{ base: '52px', md: '100px' }}
          ml={{ base: '-13.5px', md: '-30px' }}
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
