import React from 'react';

import { Wrap, WrapItem, Flex, Text } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import { SelectedRecipeFilters } from 'src/utils/types';
import { keys } from 'src/utils/util';

interface Props {
  selectedFilters: SelectedRecipeFilters;
  updateSelectedFilters: React.Dispatch<React.SetStateAction<SelectedRecipeFilters>>;
}

const RecipeSidebarChips = ({ selectedFilters, updateSelectedFilters }: Props) => {
  return (
    <Wrap mt="9px">
      {keys(selectedFilters).map(category =>
        selectedFilters[category]?.map(val => {
          return (
            <WrapItem key={val}>
              <Flex
                bg="green.500"
                py="2px"
                pl="20px"
                pr="7px"
                borderRadius="20px"
                alignItems="center"
              >
                <Text fontSize="14px" mr="6px">
                  {val}
                </Text>
                <MdClose
                  cursor="pointer"
                  size="13px"
                  onClick={() =>
                    updateSelectedFilters(filters => {
                      const oldFilters = { ...filters };
                      const vals = oldFilters[category];
                      if (vals != null) {
                        if (vals.length === 1) {
                          delete oldFilters[category];
                        } else {
                          oldFilters[category] = vals.filter(v => v !== val);
                        }
                      }
                      return oldFilters;
                    })
                  }
                />
              </Flex>
            </WrapItem>
          );
        }),
      )}
    </Wrap>
  );
};

export default RecipeSidebarChips;
