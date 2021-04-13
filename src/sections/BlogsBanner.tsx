import React from 'react';

import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.BlogsBannerFragment;
}

function BlogsBanner({ data }: Props): JSX.Element {
  const featuredBlog = data?.contentfulBlogPost;
  const title = featuredBlog?.title;
  const image = featuredBlog?.heroImage?.fluid;
  const description = featuredBlog?.description?.childMarkdownRemark?.rawMarkdownBody;
  const slug = featuredBlog?.slug;

  return (
    <Flex
      minH={627}
      direction="column"
      justify="center"
      align={{ base: 'center', md: 'start' }}
      position="relative"
    >
      {image && (
        <Img
          fluid={image}
          style={{ height: `100%`, position: 'absolute', width: `100%`, top: 0 }}
        />
      )}
      <Center
        bg="creamsicle"
        pt={10}
        pb={5}
        px={5}
        marginLeft={{ base: 0, md: 20 }}
        zIndex={2}
        w="lg"
      >
        <VStack align="stretch">
          <Heading textStyle="heading1">{title}</Heading>
          <Text textStyle="body2">{description}</Text>
          <Box align="end">
            <Link to={`/blogs/${slug ?? ''}`}>
              <Button
                textStyle="body1"
                variant="secondary"
                rightIcon={<ArrowForwardIcon />}
                _hover={{ color: 'black' }}
              >
                READ MORE
              </Button>
            </Link>
          </Box>
        </VStack>
      </Center>
    </Flex>
  );
}

export default BlogsBanner;

export const fragment = graphql`
  fragment BlogsBanner on Query {
    contentfulBlogPost(featured: { eq: true }) {
      title
      heroImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      slug
    }
  }
`;
