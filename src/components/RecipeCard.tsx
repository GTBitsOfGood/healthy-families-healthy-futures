import React from 'react';
import { TimeIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Flex, Spacer } from '@chakra-ui/react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

interface Props {
  data: GatsbyTypes.RecipeCardFragment;
}

function RecipeCard({ data }: Props): JSX.Element {
  return (
    <Box maxW="339px" maxH="301px">
      <Flex mb={5}>
        <Heading textStyle="subheading2">{data.title}</Heading>
        <Spacer />
        <Flex float="right">
          <TimeIcon mt="2px" color="green.500" />
          <Text ml={2} textStyle="subheading2" color="green.500">
            {Number(data.totalTime) + Number(data.prepTime)} min
          </Text>
        </Flex>
      </Flex>

      <Box h="219px" mb={3}>
        {data.mainImage?.fluid == null ? (
          <Box w="full" h="full" bg="lightgray"></Box>
        ) : (
          <Img alt="" fluid={data.mainImage?.fluid} />
        )}
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
