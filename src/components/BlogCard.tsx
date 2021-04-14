import React from 'react';

import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.BlogCardFragment;
}

function BlogCard({ data }: Props): JSX.Element {
  const title = data.title;
  const image = data.heroImage?.fluid;
  const publishDate = data.publishDate;
  const description = data.description?.childMarkdownRemark?.rawMarkdownBody;
  const slug = data.slug;

  return (
    <Flex direction="column" w="583px">
      <Heading textStyle="heading2">{title}</Heading>
      <Box h="441px" mb={3}>
        {image ? (
          <Img fluid={image} style={{ height: '100%', width: '100%' }} />
        ) : (
          <Box w="full" h="full" bg="lightgray" />
        )}
      </Box>
      <Text textStyle="body1">{publishDate}</Text>
      <Text textStyle="body2" fontWeight="semibold">
        {description}
      </Text>
      <Box align="end">
        <Link to={`/blog/${slug ?? ''}`}>
          <Button textStyle="body1" variant="secondary" rightIcon={<ArrowForwardIcon />}>
            READ MORE
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default BlogCard;

export const fragment = graphql`
  fragment BlogCard on ContentfulBlogPost {
    title
    heroImage {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
    }
    publishDate(formatString: "MM/DD/YYYY")
    description {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
    slug
  }
`;
