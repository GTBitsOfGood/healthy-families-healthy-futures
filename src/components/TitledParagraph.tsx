import React from 'react';

import { Text, HStack, VStack, Divider, Box } from '@chakra-ui/react';

interface Props {
  title: string;
  paragraph: string;
}

function TitledParagraph({ title, paragraph }: Props): JSX.Element {
  return (
    <VStack align="stretch" spacing={4}>
      <HStack align="center" spacing={4}>
        <Text textStyle="heading2">{title}</Text>
        <Divider width="full" borderColor="green.500" />
      </HStack>
      <Box>
        <Text textStyle="body1" color="black">
          {paragraph}
        </Text>
      </Box>
    </VStack>
  );
}

export default TitledParagraph;
