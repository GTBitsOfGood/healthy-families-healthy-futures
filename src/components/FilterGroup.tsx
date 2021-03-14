import React, { ReactText } from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  VStack,
} from '@chakra-ui/react';

interface Props {
  category: string;
  options: ReactText[];
  selectedOptions: ReactText[];
  onChange: (options: string[]) => void;
}

function FilterGroup({ category, options, selectedOptions, onChange }: Props): JSX.Element {
  return (
    <Accordion allowToggle borderColor="white" defaultIndex={0}>
      <AccordionItem>
        <AccordionButton _hover={{ backgroundColor: 'white' }} padding={0}>
          <Box flex="1" textAlign="left" fontWeight="bold">
            {category.toUpperCase()}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel paddingBottom={4}>
          <CheckboxGroup value={selectedOptions} onChange={onChange}>
            <VStack align="left">
              {options.map(option => (
                <Checkbox
                  key={option}
                  value={option}
                  spacing={5}
                  borderColor="gray.400"
                  color="gray.700"
                  colorScheme="green"
                >
                  {option}
                </Checkbox>
              ))}
            </VStack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default FilterGroup;
