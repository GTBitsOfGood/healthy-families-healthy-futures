import React, { useState, useEffect } from 'react';

import { Heading, Flex, Button, VStack } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import { parse, stringify } from 'query-string';

import FilterGroup from './FilterGroup';

interface Props {
  location: Location;
}

function RecipeSidebar({ location }: Props): JSX.Element {
  const defaultFilters = parse(location.search, { arrayFormat: 'comma' });
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

  return (
    <div>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="md">
          Filters
        </Heading>
        <Button variant="ghost" colorScheme="gray" onClick={() => updateSelectedFilters({})}>
          Clear
        </Button>
      </Flex>

      <VStack align="stretch">
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

          const onOptionsChange = (options: string[]) => {
            updateSelectedFilters({
              ...selectedFilters,
              [category]: options,
            });
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
      </VStack>
    </div>
  );
}

export default RecipeSidebar;
