import React from 'react';

import { Box, Flex, Heading } from '@chakra-ui/react';

interface Props {
  text: string;
  textPosition: 'left' | 'right';
}

const SectionHeader = ({ text, textPosition }: Props) => {
  return (
    <Flex pt={{ base: '25px', md: '80px' }}>
      {textPosition === 'right' && <Box flex="1" bg="creamsicle.500" w="100%" />}
      <Heading
        textAlign={'center'}
        textStyle="heading1"
        textTransform="uppercase"
        mx={['20px', null, '84px']}
      >
        {text}
      </Heading>
      {textPosition === 'left' && <Box flex="1" bg="creamsicle.500" w="100%" />}
    </Flex>
  );
};

export default SectionHeader;
