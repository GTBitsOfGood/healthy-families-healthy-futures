import React from 'react';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, Text, Image, HStack, VStack, Box } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../../components/Layout';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeByTitleQuery;
}

function RecipeTemplate(props: Props): JSX.Element {
  const recipe = props.data.contentfulRecipe;

  //TODO: Delete this, just a placeholder for now
  const ingredients = ['Ingredient 1', 'Ingredient 2', 'Ingredient 3', 'Ingredient 4'];

  return (
    <Layout location={props.location}>
      <Box>
        <HStack align="center" spacing={2}>
          <IconButton
            aria-label="Back button"
            icon={<ChevronLeftIcon w={7} h={7} />}
            size="sm"
            backgroundColor="white"
          ></IconButton>
          <Text>Back to Recipes</Text>
        </HStack>
        <Flex justify="space-between" marginTop={5}>
          <VStack align="start" spacing={5}>
            <Heading>{recipe?.title}</Heading>
            <HStack align="start" spacing={10}>
              <VStack align="start">
                <Text fontWeight="bold">Total Time:</Text>
                <Text fontWeight="bold">Prep Time:</Text>
                <Text fontWeight="bold">Ingredients:</Text>
              </VStack>
              <VStack align="start">
                <Text>{recipe?.totalTime} min</Text>
                <Text>{recipe?.prepTime} min</Text>
                <VStack>
                  {ingredients.map(ingredient => (
                    <Text key={ingredient}>{ingredient}</Text>
                  ))}
                </VStack>
              </VStack>
            </HStack>
          </VStack>
          <Image
            src=""
            fallbackSrc="https://via.placeholder.com/150"
            alt="Recipe Image"
            boxSize="sm"
            objectFit="cover"
          ></Image>
        </Flex>
        <VStack align="start">
          <Text fontWeight="bold" fontSize="xl">
            Prep
          </Text>
          <Text>{recipe?.prepDirections?.prepDirections}</Text>
        </VStack>
        <VStack align="start">
          <Text fontWeight="bold" fontSize="xl">
            Instructions
          </Text>
          <Text>{recipe?.directions?.directions}</Text>
        </VStack>
      </Box>
    </Layout>
  );
}

export default RecipeTemplate;

export const pageQuery = graphql`
  query RecipeByTitle($title: String!) {
    contentfulRecipe(title: { eq: $title }) {
      title
      totalTime
      prepTime
      ingredients {
        ingredients
      }
      directions {
        directions
      }
      prepDirections {
        prepDirections
      }
    }
  }
`;
