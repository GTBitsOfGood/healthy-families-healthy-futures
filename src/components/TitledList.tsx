import React from 'react';

import { Text, HStack, VStack, Divider, OrderedList, ListItem, Box } from '@chakra-ui/react';

interface Props {
  title: string;
  listElements: string[];
}

function TitledList({ title, listElements }: Props): JSX.Element {
  return (
    <VStack align="stretch" spacing={4}>
      <HStack align="center" spacing={4}>
        <Text textStyle="heading2">{title}</Text>
        <Divider width="full" borderColor="green.500" />
      </HStack>
      <Box>
        <OrderedList listStylePos="outside" color="green.500" spacing={2}>
          {listElements.map(element => (
            <ListItem key={element}>
              <Box marginLeft={5}>
                <Text as="span" textStyle="body1" color="black">
                  {element}
                </Text>
              </Box>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
    </VStack>
  );
}

export default TitledList;
