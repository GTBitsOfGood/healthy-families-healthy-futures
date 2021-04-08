import React from 'react';

import { Heading, Flex, Button, VStack, Box } from '@chakra-ui/react';
import { SelectedRecipeFilters } from 'src/utils/types';
import { entries, removeNulls } from 'src/utils/util';

import FilterGroup from './FilterGroup';

interface Props {
  filters: SelectedRecipeFilters;
  selectedFilters: SelectedRecipeFilters;
  updateSelectedFilters: React.Dispatch<React.SetStateAction<SelectedRecipeFilters>>;
}

function RecipeSidebar({ filters, selectedFilters, updateSelectedFilters }: Props): JSX.Element {
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
