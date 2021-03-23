import React from 'react';

import { TimeIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Flex, Spacer } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.RecipeCardFragment;
}

function RecipeCard({ data }: Props): JSX.Element {
  return (
    <Box w={{ base: '183px', md: '340px' }}>
      <Flex display={{ base: 'none', md: 'flex' }} mb={5}>
        <Heading textStyle="subheading2">{data.title}</Heading>
        <Spacer />
        <Flex float="right">
          <TimeIcon mt="2px" color="green.500" />
          <Text ml={2} textStyle="subheading2" color="green.500">
            {Number(data.totalTime) + Number(data.prepTime)} min
          </Text>
        </Flex>
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
        <Flex>
          <TimeIcon mt="2px" color="green.500" />
          <Text ml={2} textStyle="subheading2" color="green.500">
            {Number(data.totalTime) + Number(data.prepTime)} min
          </Text>
        </Flex>
      </Box>

      <Text textStyle="body3" fontWeight="semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore
      </Text>
    </Box>
  );
}

export default RecipeCard;
export const fragment = graphql`
  fragment RecipeCard on ContentfulRecipe {
    id
    prepTime
    title
    totalTime
    ingredients {
      ingredients
    }
    mainImage {
      fluid(maxWidth: 339, maxHeight: 219, resizingBehavior: SCALE) {
        ...GatsbyContentfulFluid
      }
      description
    }
    foodTypeTags2 {
      key
      tagName
    }
    ingredientTags2 {
      key
      tagName
    }
    updatedAt
    yield
  }
`;
