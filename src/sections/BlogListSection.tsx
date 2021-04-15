import React, { useState } from 'react';

import { Flex, VStack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import BlogCard from 'src/components/BlogCard';
import Pagination from 'src/components/Pagination';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.BlogListFragment;
}

function BlogListSection({ data }: Props): JSX.Element {
  const { filterLocale } = useLocale();
  const [currentPage, setCurrentPage] = useState(0);
  const blogCards = filterLocale(data?.allBlogs?.nodes);

  const blogsPerPage = 4;
  const blogsStart = currentPage * blogsPerPage;
  const blogsEnd = blogsStart + blogsPerPage;
  const pageCount = Math.ceil(blogCards.length / blogsPerPage);

  return (
    <VStack my={10} spacing={10}>
      <Flex w="full" wrap="wrap" justifyContent="space-evenly">
        {blogCards.slice(blogsStart, blogsEnd).map(card => (
          <Box px="5px" pb={{ base: '36px', md: '60px' }} key={card.title}>
            <BlogCard data={card} />
          </Box>
        ))}
      </Flex>
      <Flex justify="center">
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onChange={pageNum => setCurrentPage(pageNum)}
        />
      </Flex>
    </VStack>
  );
}

export default BlogListSection;

export const fragment = graphql`
  fragment BlogList on Query {
    allBlogs: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        ...BlogCard
        node_locale
      }
    }
  }
`;
