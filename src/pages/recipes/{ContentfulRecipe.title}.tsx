import React from 'react';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, Text, Image, HStack, VStack, Box } from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import TitledList from 'src/components/TitledList';

import Layout from '../../components/Layout';
import { parseRecipe } from '../../utils/parse';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeByTitleQuery;
}

function RecipeTemplate(props: Props): JSX.Element {
  const contentfulRecipe = props.data.contentfulRecipe;
  const recipe = parseRecipe(contentfulRecipe as GatsbyTypes.ContentfulRecipe);

  return (
    <Layout location={props.location}>
      <Box margin={{ base: 5, md: 10 }}>
        <HStack display={{ base: 'none', md: 'flex' }} align="center" spacing={2} marginBottom={10}>
          <Link to="/recipes">
            <IconButton
              aria-label="Back button"
              icon={<ChevronLeftIcon w={7} h={7} />}
              size="sm"
              backgroundColor="white"
            ></IconButton>
          </Link>
          <Text>Back to Recipes</Text>
        </HStack>
        <Heading
          fontSize={{ base: 'xl', md: '3xl' }}
          textAlign={{ base: 'center', md: 'start' }}
          marginBottom={5}
        >
          {recipe.title}
        </Heading>
        <Flex direction={{ base: 'column-reverse', md: 'row' }} justify="space-between">
          <VStack
            align="start"
            spacing={5}
            marginTop={{ base: 5, md: 0 }}
            marginRight={{ base: 0, md: 10 }}
          >
            <HStack align="start" spacing={10}>
              <VStack align="start">
                <Text fontWeight="bold">Cook Time</Text>
                <Text fontWeight="bold">Prep Time</Text>
                <Text fontWeight="bold">Total Time</Text>
                <Text fontWeight="bold">Yield</Text>
                <Text fontWeight="bold">Ingredients</Text>
              </VStack>
              <VStack align="start">
                <Text>{recipe.cookTime} min</Text>
                <Text>{recipe.prepTime} min</Text>
                <Text>{recipe.totalTime} min</Text>
                <Text>{recipe.yield}</Text>
                <VStack align="stretch">
                  {recipe.ingredientGroups.map(group => (
                    <Flex justify="space-between" key={group[0]}>
                      <Box flex={2}>
                        <Text as="span" display={{ base: 'inline-block', md: 'none' }}>
                          {group[1]}
                        </Text>{' '}
                        <Text as="span" textTransform={{ base: 'lowercase', md: 'none' }}>
                          {group[0]}
                        </Text>{' '}
                        {group[2] && (
                          <Text as="span" color="gray">
                            ({group[2]})
                          </Text>
                        )}
                      </Box>
                      <Box display={{ base: 'none', md: 'block' }} flex={1} marginLeft={10}>
                        <Text>{group[1]}</Text>
                      </Box>
                    </Flex>
                  ))}
                </VStack>
              </VStack>
            </HStack>
          </VStack>
          <Image
            src={recipe.image}
            alt="Recipe Image"
            boxSize={{ base: 'auto', md: 'md' }}
            objectFit="cover"
          ></Image>
        </Flex>
        <br></br>
        <TitledList title="Prep" listElements={recipe.prepDirections}></TitledList>
        <br></br>
        <TitledList title="Instructions" listElements={recipe.instructions}></TitledList>
        {recipe.notes?.length > 0 && (
          <Box>
            <br></br>
            <TitledList title="Notes" listElements={recipe.notes}></TitledList>
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export default RecipeTemplate;

export const pageQuery = graphql`
  query RecipeByTitle($title: String!) {
    contentfulRecipe(title: { eq: $title }) {
      title
      mainImage {
        file {
          url
        }
      }
      totalTime
      prepTime
      yield
      ingredients {
        ingredients
      }
      directions {
        directions
      }
      prepDirections {
        prepDirections
      }
      notes {
        notes
      }
    }
  }
`;
