import React from 'react';

import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.BlogCardFragment;
  altLayout?: true;
}

function BlogCard({ data, altLayout }: Props): JSX.Element {
  const slug = data.slug;

  const title = <Heading textStyle="heading2">{data.title}</Heading>;
  const date = (
    <Text textStyle="body1" fontWeight={500}>
      {data.publishDate}
    </Text>
  );
  const description = (
    <Text textStyle="body2" fontWeight={500}>
      {data.description?.childMarkdownRemark?.rawMarkdownBody}
    </Text>
  );
  const author = (
    <Text textStyle="body1" fontWeight="bold">
      {data.author?.name}
    </Text>
  );
  const image = (
    <Box w="full" h="441px">
      {data.heroImage?.fluid ? (
        <Img fluid={data.heroImage.fluid} style={{ height: '100%', width: '100%' }} />
      ) : (
        <Box w="full" h="full" bg="lightgray" />
      )}
    </Box>
  );
  const cta = (
    <Flex w="full" justifyContent="flex-end">
      <Link to={`/blog/${slug ?? ''}`}>
        <Button textStyle="body1" variant="secondary" rightIcon={<ArrowForwardIcon />}>
          READ MORE
        </Button>
      </Link>
    </Flex>
  );

  return (
    <VStack w="583px" spacing="10px" alignItems="start">
      {altLayout == null ? (
        <>
          {title}
          {image}
          {date}
          {description}
        </>
      ) : (
        <>
          {image}
          {title}
          {description}
          {author}
          {date}
        </>
      )}
      {cta}
    </VStack>
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
    author {
      name
    }
    slug
  }
`;
