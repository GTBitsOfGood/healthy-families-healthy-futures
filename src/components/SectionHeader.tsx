import React from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

interface Props {
  text: string;
  textPosition: 'left' | 'right';
}

const SectionHeader = ({ text, textPosition }: Props) => {
  return (
    <Flex>
      {textPosition === 'right' && <Box flex="1" bg="creamsicle" w="100%" />}
      <Text
        textAlign={'center'}
        textStyle="heading1"
        textTransform="uppercase"
        mx={{ base: '15px', md: '84px' }}
      >
        {text}
      </Text>
      {textPosition === 'left' && <Box flex="1" bg="creamsicle" w="100%" />}
    </Flex>
  );
};

export default SectionHeader;
