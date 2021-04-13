import React from 'react';

import { SimpleGrid } from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import BlogCard from 'src/components/BlogCard';

interface Props {
  data: GatsbyTypes.BlogListFragment;
}

function BlogListSection({ data }: Props): JSX.Element {
  const blogCards = data?.allContentfulBlogPost?.nodes;

  return (
    <SimpleGrid columns={2} justifyItems="center" spacing={10} my={10}>
      {blogCards.map(card => (
        <BlogCard key={card.title} data={card} />
      ))}
    </SimpleGrid>
  );
}

export default BlogListSection;

export const fragment = graphql`
  fragment BlogList on Query {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        ...BlogCard
      }
    }
  }
`;
