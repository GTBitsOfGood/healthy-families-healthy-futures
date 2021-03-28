import React, { useState, useEffect } from 'react';

import { Heading, Flex, Button, VStack, Box } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import { parse, stringify } from 'query-string';

import { SelectedRecipeFilters } from '../utils/types';
import { entries, removeNulls } from '../utils/util';
import FilterGroup from './FilterGroup';

interface Props {
  filters: SelectedRecipeFilters;
  location: Location;
  onChange(newFilter: SelectedRecipeFilters): void;
}

function RecipeSidebar({ filters, location, onChange }: Props): JSX.Element {
  const defaultFilters = Object.fromEntries(
    entries(parse(location.search, { arrayFormat: 'comma' })).map(([category, value]) => [
      category,
      typeof value === 'string' ? [value] : value,
    ]),
  );

  // Note: selectedFilters can include other query parameters that are not necessarily used for filtering
  const [selectedFilters, updateSelectedFilters] = useState<SelectedRecipeFilters>(defaultFilters);

  useEffect(() => {
    onChange(selectedFilters);
  }, [onChange, selectedFilters]);

  useEffect(() => {
    const newQueries = stringify(selectedFilters, { arrayFormat: 'comma' });
    const newUrl = `${location.pathname}?${newQueries}`;
    void navigate(newUrl, {
      state: {
        disableScrollUpdate: true,
      },
      replace: true,
    });
  }, [location.pathname, selectedFilters]);

  // Check if the query string has any of the category as a selected filter
  const hasActiveFilter = entries(filters).some(x => x != null && x[0] in selectedFilters);

  return (
    <Box px={6}>
      <Flex justify="space-between" align="center" mb={5} h={10}>
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
        {removeNulls(entries(filters)).map(([category, options]) => {
          let selectedOptions: string[] = [];

          if (category in selectedFilters) {
            selectedOptions = selectedFilters[category] as string[];
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
              options={options ?? []}
              selectedOptions={selectedOptions}
              onChange={onOptionsChange}
              key={category}
            />
          );
        })}
      </VStack>
    </Box>
  );
}

export default RecipeSidebar;
