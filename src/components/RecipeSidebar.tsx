import React, { useState, useEffect } from 'react';

import {
  Heading,
  Flex,
  Button,
  Tag,
  Box,
  SimpleGrid,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { navigate } from 'gatsby';
import { parse, stringify } from 'query-string';

import FilterGroup from './FilterGroup';

interface Props {
  location: Location;
}

function RecipeSidebar({ location }: Props): JSX.Element {
  const defaultFilters = parse(location.search, { arrayFormat: 'comma' });
  // Note: selectedFilters can include other query parameters that are not necessarily used for filtering
  const [selectedFilters, updateSelectedFilters] = useState(defaultFilters);

  // TODO - Retrieve the filters dynamically
  const filters = [
    {
      category: 'Food Type',
      options: ['Vegan', 'Vegetarian', 'Breakfast', 'Lunch'],
    },
    {
      category: 'Ingredients',
      options: ['Beans', 'Fruit', 'Protein', 'Dairy'],
    },
    {
      category: 'Time',
      options: ['< 10 min', '15-30 min', '31-45 min'],
    },
  ];

  useEffect(() => {
    const newQueries = stringify(selectedFilters, { arrayFormat: 'comma' });
    const newUrl = `${location.pathname}?${newQueries}`;
    void navigate(newUrl);
  }, [location.pathname, selectedFilters]);

  // Check if the query string has any of the category as a selected filter
  const hasActiveFilter = filters.map(x => x.category).some(x => x in selectedFilters);

  let filterCount = 0;
  let tags: JSX.Element[] = [];

  const filtersDisplay = (
    <SimpleGrid columns={[2, null, 1]} spacing={10}>
      {filters.map(filter => {
        const { category, options } = filter;
        let selectedOptions: string[] = [];

        if (category in selectedFilters) {
          if (typeof selectedFilters[category] === 'string') {
            // If there is only one option selected, the query-string parse will read it as string
            selectedOptions = [selectedFilters[category] as string];
          } else if (Array.isArray(selectedFilters[category])) {
            selectedOptions = selectedFilters[category] as string[];
          }
        }

        filterCount += selectedOptions.length;
        selectedOptions.forEach(option => {
          tags.push(
            <WrapItem key={`${category} ${option}`}>
              <Tag size="md" colorScheme="green" variant="solid" borderRadius="full">
                <TagLabel>{option}</TagLabel>
                <TagCloseButton onClick={() => {
                  updateSelectedFilters({
                    ...selectedFilters,
                    [category]: selectedOptions.filter(x => x !== option),
                  });
                }} />
              </Tag>
            </WrapItem>
          );
        });

        const onOptionsChange = (options: string[]) => {
          if (options.length > 0) {
            updateSelectedFilters({
              ...selectedFilters,
              [category]: options,
            });
          } else {
            // If there are no options, remove this category from selected filters.
            // This helps to determine if there is any active filters
            const newSelectedFilters = { ...selectedFilters };
            delete newSelectedFilters[category];
            updateSelectedFilters(newSelectedFilters);
          }
        };

        return (
          <FilterGroup
            category={category}
            options={options}
            selectedOptions={selectedOptions}
            onChange={onOptionsChange}
            key={filter.category}
          />
        );
      })}
    </SimpleGrid>
  );

  const clearButton = (
    <Button
      variant="back"
      onClick={() => updateSelectedFilters({})}
      hidden={!hasActiveFilter}
      display="block"
      margin={['auto', null, '-0']}
    >
      <Text textStyle="heading3" color="green.500">
        CLEAR ({filterCount})
      </Text>
    </Button>
  );


  return (
    <>
      <Box px={6} display={['none', null, 'block']}>
        <Flex justify="space-between" align="center" mb={5}>
          <Heading as="h1" size="md">
            Filters
          </Heading>
          {clearButton}
        </Flex>
        {tags.length > 0 && <Wrap spacing="10px">{tags}</Wrap>}
        {filtersDisplay}
      </Box>

      {/* Display filters as accordion for mobile view*/}
      <Accordion mb={10} display={['block', null, 'none']} allowToggle defaultIndex={0}>
        <AccordionItem>
          <AccordionButton _hover={{ backgroundColor: 'white' }} px={5}>
            <Heading as="h1" size="md">
              Filters
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel paddingBottom={4}>
            {tags.length > 0 && <Wrap spacing="10px">{tags}</Wrap>}
            {filtersDisplay}
            {clearButton}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default RecipeSidebar;
