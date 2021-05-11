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
import { RecipeFilters, SelectedRecipeFilters, Tag } from 'src/utils/types';
import { useMiscText } from 'src/utils/useMiscText';
import { entries, removeNulls } from 'src/utils/util';

import FilterGroup from './FilterGroup';
import RecipeSidebarChips from './RecipeSidebarChips';

interface Props {
  filters: RecipeFilters;
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
  const hasActiveFilter =
    entries(selectedFilters).some(x => x[1].length > 0) || searchQuery.length > 0;

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
            updateSelectedFilters({ 'Food Type': [], Ingredients: [], Time: [] });
            setSearchQuery('');
          }}
          hidden={!hasActiveFilter}
          textTransform="uppercase"
          color="green.500"
          _hover={{ color: 'green.600' }}
          _active={{ color: 'green.700' }}
        >
          {useMiscText().clear}
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
          const onOptionChange = (checked: boolean, option: Tag) => {
            const oldCategoryOptions = selectedFilters[category];
            const categoryOptions = checked
              ? [...oldCategoryOptions, option]
              : oldCategoryOptions.filter(tag => tag.key !== option.key);

            updateSelectedFilters({
              ...selectedFilters,
              [category]: categoryOptions,
            });
          };

          return (
            <FilterGroup
              category={category}
              options={options ?? []}
              selectedOptions={selectedFilters[category]}
              onOptionChange={onOptionChange}
              key={category}
            />
          );
        })}
      </VStack>
    </Box>
  );
}

export default RecipeSidebar;
