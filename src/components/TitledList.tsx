import React from 'react';

import { Text, HStack, VStack, Divider, OrderedList, ListItem, Box } from '@chakra-ui/react';

interface Props {
  title: string;
  listElements: string[] | undefined;
}

function TitledList({ title, listElements }: Props): JSX.Element {
  return (
    <VStack align="stretch" spacing={4}>
      <HStack align="center" spacing={4}>
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Divider width="full" borderColor="green" />
      </HStack>
      <Box>
        <OrderedList listStylePos="outside" color="green" spacing={2}>
          {listElements?.map(element => (
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
