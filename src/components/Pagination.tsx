import React from 'react';

import { Button } from '@chakra-ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, HStack } from '@chakra-ui/layout';

import theme from '../@chakra-ui/gatsby-plugin/theme';

interface Props {
  currentPage: number;
  pageCount: number;
  onChange: (pageNum: number) => void;
}

function Pagination({ currentPage, pageCount, onChange }: Props): JSX.Element {
  function updatePage(pageNum: number) {
    if (pageNum != currentPage && pageNum >= 0 && pageNum < pageCount) {
      onChange(pageNum);
    }
  }

  return pageCount == 1 ? (
    <Box _hover={{ cursor: 'default' }}>1</Box>
  ) : (
    <HStack align="center">
      <Button
        onClick={() => updatePage(currentPage - 1)}
        variant="secondary"
        size="xs"
        isDisabled={currentPage == 0}
      >
        <ChevronLeftIcon boxSize={5} />
      </Button>
      {Array.from({ length: pageCount }, (_, pageNum) => (
        <Button
          key={pageNum}
          onClick={() => updatePage(pageNum)}
          variant="secondary"
          color={pageNum == currentPage ? 'black' : 'gray.light'}
          size="xs"
          _hover={
            pageNum == currentPage
              ? { cursor: 'default' }
              : theme.components.Button.variants.secondary._hover
          }
          _active={pageNum == currentPage ? {} : theme.components.Button.variants.secondary._active}
        >
          {pageNum + 1}
        </Button>
      ))}
      <Button
        onClick={() => updatePage(currentPage + 1)}
        variant="secondary"
        size="xs"
        isDisabled={currentPage == pageCount - 1}
      >
        <ChevronRightIcon boxSize={5} />
      </Button>
    </HStack>
  );
}

export default Pagination;
