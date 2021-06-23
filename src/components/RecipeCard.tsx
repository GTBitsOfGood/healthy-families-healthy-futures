import React from 'react';

import { TimeIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Flex, Spacer } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.RecipeCardFragment;
  placeholderImage: GatsbyTypes.ContentfulRecipePlaceholderImage;
  hideTime?: true;
}

function RecipeCard({ data, hideTime, placeholderImage }: Props): JSX.Element {
  const timeInfo = hideTime == null && (
    <Flex>
      <TimeIcon mt="2px" color="green.500" />
      <Text ml={2} textStyle="subheading2" color="green.500">
        {Number(data.totalTime) + Number(data.prepTime)} min
      </Text>
    </Flex>
  );

  return (
    <Box w={{ base: '183px', md: '340px' }}>
      <Flex display={{ base: 'none', md: 'flex' }} mb={5}>
        <Heading textStyle="subheading2">{data.title}</Heading>
        <Spacer />
        {timeInfo}
      </Flex>

      <Box h={{ base: '179px', md: '219px' }} mb={3} boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}>
        {data.mainImage?.fluid == null ? (
          <Img alt="" fluid={placeholderImage.placeholderImage?.fluid} />
        ) : (
          <Img alt="" fluid={data.mainImage?.fluid} />
        )}
      </Box>

      <Box display={{ base: 'inline', md: 'none' }} mb={5}>
        <Heading textStyle="subheading2">{data.title}</Heading>
        <Spacer />
        {timeInfo}
      </Box>

      <Text textStyle="body3" fontWeight="semibold">
        {data.description?.description ?? ''}
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
    description {
      description
    }
    ingredients {
      ingredients
    }
    mainImage {
      fluid(maxWidth: 339, maxHeight: 219, resizingBehavior: SCALE) {
        ...GatsbyContentfulFluid
      }
      description
    }
    foodTypeTags {
      key
      tagName
    }
    ingredientTags {
      key
      tagName
    }
    updatedAt
    yield
  }
`;
