import React from 'react';

import {
  Heading,
  Flex,
  Button,
  VStack,
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { MdClose, MdSearch } from 'react-icons/md';
import { SelectedRecipeFilters } from 'src/utils/types';
import { entries, removeNulls } from 'src/utils/util';

import FilterGroup from './FilterGroup';
import RecipeSidebarChips from './RecipeSidebarChips';

interface Props {
  filters: SelectedRecipeFilters;
  selectedFilters: SelectedRecipeFilters;
  updateSelectedFilters: React.Dispatch<React.SetStateAction<SelectedRecipeFilters>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

function RecipeSidebar({
  filters,
  selectedFilters,
  updateSelectedFilters,
  searchQuery,
  setSearchQuery,
}: Props): JSX.Element {
  // Check if the query string has any of the category as a selected filter
  const hasActiveFilter =
    entries(filters).some(x => x != null && x[0] in selectedFilters) || searchQuery.length > 0;

  const filterValues = removeNulls(entries(selectedFilters))
    .map(x => x[0])
    .flat();

  return (
    <Box px={6}>
      <Flex justify="space-between" align="center" mb={3} h={10}>
        <Heading as="h1" size="md">
          Filters
        </Heading>
        <Button
          variant="back"
          onClick={() => {
            updateSelectedFilters({});
            setSearchQuery('');
          }}
          hidden={!hasActiveFilter}
          textTransform="uppercase"
          color="green.500"
          _hover={{ color: 'green.600' }}
          _active={{ color: 'green.700' }}
        >
          Clear
        </Button>
      </Flex>

      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={MdSearch} color="black" />
        </InputLeftElement>
        <Input
          placeholder="search recipes"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {searchQuery.length > 0 && (
          <InputRightElement cursor="pointer" onClick={() => setSearchQuery('')}>
            <Icon as={MdClose} color="black" />
          </InputRightElement>
        )}
      </InputGroup>

      {filterValues.length > 0 && (
        <RecipeSidebarChips
          selectedFilters={selectedFilters}
          updateSelectedFilters={updateSelectedFilters}
        />
      )}

      <VStack align="stretch" mt={5}>
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
