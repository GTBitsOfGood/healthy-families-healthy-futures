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
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Divider width="full" borderColor="green.500" />
      </HStack>
      <Box>
        <OrderedList listStylePos="outside" color="green.500" spacing={2}>
          {listElements.map(element => (
            <ListItem key={element}>
              <Box marginLeft={5}>
                <Text as="span" color="black">
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
