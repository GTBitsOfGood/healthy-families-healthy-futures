import React from 'react';

import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.BlogsBannerFragment;
}

function BlogsBanner({ data }: Props): JSX.Element {
  const { findLocale } = useLocale();
  const featuredBlog = findLocale(data.allContentfulFeaturedBlogPost.nodes)?.blogPost;

  const title = featuredBlog?.title;
  const image = featuredBlog?.heroImage?.fluid;
  const description = featuredBlog?.description?.description;
  const slug = featuredBlog?.slug;

  return (
    <Flex
      minH={{ base: 0, md: 627 }}
      py={{ base: '30px', md: 0 }}
      direction="column"
      justify="center"
      align="start"
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
        p={5}
        ml={{ base: '20px', md: '120px' }}
        zIndex={2}
        w={{ base: '300px', md: '540px' }}
      >
        <VStack align="stretch">
          <Heading textStyle="heading1">{title}</Heading>
          <Text textStyle="body2">{description}</Text>
          <Box align="end">
            <Link to={`/blog/${slug ?? ''}`}>
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
    allContentfulFeaturedBlogPost {
      nodes {
        blogPost {
          title
          heroImage {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            description
          }
          slug
        }
        node_locale
      }
    }
  }
`;
