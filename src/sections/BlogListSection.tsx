import React, { useState } from 'react';

import { Flex, SimpleGrid, VStack } from '@chakra-ui/layout';
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
      <SimpleGrid columns={2} justifyItems="center" spacing={10}>
        {blogCards.slice(blogsStart, blogsEnd).map(card => (
          <BlogCard key={card.title} data={card} />
        ))}
      </SimpleGrid>
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
