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

  useEffect(() => {
    const newQueries = stringify(selectedFilters, { arrayFormat: 'comma' });
    const newUrl = `${location.pathname}?${newQueries}`;
    void navigate(newUrl);
  }, [location.pathname, selectedFilters]);

  const clearFilters = () => {
    updateSelectedFilters({});
  };

  return (
    <div>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="md">
          Filters
        </Heading>
        <Button variant="ghost" colorScheme="gray" onClick={clearFilters}>
          Clear
        </Button>
      </Flex>

      <VStack align="stretch">
        {Object.keys(selectedFilters).map(filter => {
          return (
            <div key={filter}>
              <b>{filter}</b>
              <p>{JSON.stringify(selectedFilters[filter])}</p>
            </div>
          );
        })}

        <FilterGroup // This is just an example of how to use this component, delete this
          category="INGREDIENTS"
          filters={['Tomato', 'Lettuce', 'Onion']}
          selectedFilters={['Tomato']}
          onChange={filters => console.log(filters)}
        ></FilterGroup>
      </VStack>
    </div>
  );
}

export default RecipeSidebar;
