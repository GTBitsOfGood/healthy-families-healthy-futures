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
  filters: ReactText[];
  selectedFilters: ReactText[];
  onChange: (filters: ReactText[]) => void;
}

function FilterGroup({ category, filters, selectedFilters, onChange }: Props): JSX.Element {
  return (
    <Accordion allowToggle borderColor="white">
      <AccordionItem>
        <AccordionButton _hover={{ backgroundColor: 'white' }} padding={0}>
          <Box flex="1" textAlign="left" fontWeight="bold">
            {category}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel paddingBottom={4}>
          <CheckboxGroup defaultValue={selectedFilters} onChange={onChange}>
            <VStack align="left">
              {filters.map(filter => (
                <Checkbox
                  key={filter}
                  value={filter}
                  spacing={5}
                  borderColor="gray.400"
                  color="gray.700"
                >
                  {filter}
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
