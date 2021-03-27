import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Flex, Spacer, Button } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.RecipeCardFragment;
}

function Featured({ data }: Props): JSX.Element {
  return (
    <Box w={{ base: '183px', md: '340px' }}>
      <Flex display={{ base: 'none', md: 'flex' }} mb={5}>
        <Heading textStyle="subheading2">{data.title}</Heading>
        <Spacer />
      </Flex>

      <Box h={{ base: '179px', md: '219px' }} mb={3}>
        {data.mainImage?.fluid == null ? (
          <Box w="full" h="full" bg="lightgray"></Box>
        ) : (
          <Img alt="" fluid={data.mainImage?.fluid} />
        )}
      </Box>

      <Box display={{ base: 'inline', md: 'none' }} mb={5}>
        <Heading textStyle="subheading2">{data.title}</Heading>
        <Spacer />
      </Box>

      <Text textStyle="body3" fontWeight="semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore
      </Text>
      <Flex float="right">
        <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
          MORE
        </Button>
      </Flex>
    </Box>
  );
}

export default Featured;
export const fragment = graphql`
  fragment RecipeCard on ContentfulRecipe {
    id
    prepTime
    title
    totalTime
    mainImage {
      fluid(maxWidth: 339, maxHeight: 219, resizingBehavior: SCALE) {
        ...GatsbyContentfulFluid
      }
      description
    }
    updatedAt
    yield
  }
`;
