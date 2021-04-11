import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  VStack,
} from '@chakra-ui/react';
import { Tag } from 'src/utils/types';

interface Props {
  category: string;
  options: Tag[];
  selectedOptions: Tag[];
  onOptionChange: (checked: boolean, option: Tag) => void;
}

function FilterGroup({ category, options, selectedOptions, onOptionChange }: Props): JSX.Element {
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
          <VStack align="left">
            {options.map(option => (
              <Checkbox
                key={option.key}
                value={option.key}
                spacing={5}
                borderColor="gray.400"
                color="gray.700"
                colorScheme="green"
                isChecked={selectedOptions.some(o => o.key === option.key)}
                onChange={e => onOptionChange(e.target.checked, option)}
              >
                {option.name}
              </Checkbox>
            ))}
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default FilterGroup;
