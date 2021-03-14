import React, { useState, useEffect } from 'react';

import { Heading, Flex, Button, VStack, Box } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import { parse, stringify } from 'query-string';

import FilterGroup from './FilterGroup';

interface Props {
  filters: { category: string; options: string[] }[];
  location: Location;
  onChange(newFilter: { [x: string]: string[] }): void;
}

function RecipeSidebar({ filters, location, onChange }: Props): JSX.Element {
  const defaultFilters = parse(location.search, { arrayFormat: 'comma' });
  // Note: selectedFilters can include other query parameters that are not necessarily used for filtering
  const [selectedFilters, updateSelectedFilters] = useState(defaultFilters);

  useEffect(() => {
    onChange(selectedFilters);
  }, []);

  useEffect(() => {
    const newQueries = stringify(selectedFilters, { arrayFormat: 'comma' });
    const newUrl = `${location.pathname}?${newQueries}`;
    void navigate(newUrl);
  }, [location.pathname, selectedFilters]);

  // Check if the query string has any of the category as a selected filter
  const hasActiveFilter = filters.map(x => x.category).some(x => x in selectedFilters);

  return (
    <Box px={6}>
      <Flex justify="space-between" align="center" mb={5}>
        <Heading as="h1" size="md">
          Filters
        </Heading>
        <Button
          variant="back"
          colorScheme="gray"
          onClick={() => {
            onChange({});
            updateSelectedFilters({});
          }}
          hidden={!hasActiveFilter}
        >
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
            if (options.length > 0) {
              const filters = { ...selectedFilters, [category]: options };
              updateSelectedFilters(filters);
              onChange(filters);
            } else {
              // If there are no options, remove this category from selected filters.
              // This helps to determine if there is any active filters
              const newSelectedFilters = { ...selectedFilters };
              delete newSelectedFilters[category];
              updateSelectedFilters(newSelectedFilters);
              onChange(newSelectedFilters);
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
      </VStack>
    </Box>
  );
}

export default RecipeSidebar;
