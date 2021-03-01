import React from 'react';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, Text, Image, HStack, VStack, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { graphql, Link, PageProps } from 'gatsby';
import TitledList from 'src/components/TitledList';

import Layout from '../../components/Layout';
import { parseRecipe } from '../../utils/parse';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeByTitleQuery;
}

const CenterImage = styled(Image)`
  width: 100%;
`;
const Container = styled(Box)`
  padding: 0px 16px 20px 16px;
`;
const Ingred = styled(Text)`
  padding: 30px 0px 10px 0px;
  font-size: 18px;
`;
const Title = styled(Heading)`
  font-size: 18px;
`;
const Preparation = styled(Text)`
  padding: 15px 0px 0px 0px;
`;

const ListOfIngreds = styled(Text)`
  font-size: 16px;
`;

function RecipeTemplate(props: Props): JSX.Element {
  const contentfulRecipe = props.data.contentfulRecipe;
  const recipe = parseRecipe(contentfulRecipe as GatsbyTypes.ContentfulRecipe);

  const isMobile = false;

  return (
    <Layout location={props.location}>
      {isMobile ? (
        <Container>
          <Title align="center">{recipe.title}</Title>
          <CenterImage
            src={recipe.image}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Recipe Image"
            boxSize="sm"
          ></CenterImage>
          <HStack align="start" spacing={10}>
            <VStack align="start">
              <Text fontWeight="bold">Cook Time</Text>
              <Text fontWeight="bold">Prep Time</Text>
              <Text fontWeight="bold">Total Time</Text>
              <Text fontWeight="bold">Yield</Text>
            </VStack>
            <VStack align="start">
              <Text>{recipe.cookTime} min</Text>
              <Text>{recipe.prepTime} min</Text>
              <Text>{recipe.totalTime} min</Text>
              <Text>{recipe.yield}</Text>
            </VStack>
          </HStack>
          <Ingred fontWeight="bold">Ingredients</Ingred>
          <ListOfIngreds>
            <VStack align="stretch">
              {recipe.ingredientGroups.map(group => (
                <Flex justify="space-between" key={group[0]}>
                  <Box flex={3}>
                    <Text>
                      {group[1]} {group[0]}{' '}
                    </Text>
                    {group[2] && (
                      <Text as="span" color="gray">
                        ({group[2]})
                      </Text>
                    )}
                  </Box>
                </Flex>
              ))}
            </VStack>
          </ListOfIngreds>
          <Preparation>
            <TitledList title="Prep" listElements={recipe.prepDirections}></TitledList>
          </Preparation>
          <br></br>
          <TitledList title="Instructions" listElements={recipe.instructions}></TitledList>
          {recipe.notes?.length > 0 && (
            <Box>
              <br></br>
              <TitledList title="Notes" listElements={recipe.notes}></TitledList>
            </Box>
          )}
        </Container>
      ) : (
        <Box margin={10}>
          <HStack align="center" spacing={2}>
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
          <Flex justify="space-between" marginTop={10}>
            <VStack align="start" spacing={5} marginRight={10}>
              <Heading>{recipe.title}</Heading>
              <HStack align="start" spacing={10}>
                <VStack align="start">
                  <Text fontWeight="bold">Cook Time</Text>
                  <Text fontWeight="bold">Prep Time</Text>
                  <Text fontWeight="bold">Total Time</Text>
                  <Text fontWeight="bold">Yield</Text>
                  <Text fontWeight="bold">Ingredients</Text>
                </VStack>
                <VStack align="start">
                  <Text>{recipe.totalTime} min</Text>
                  <Text>{recipe.prepTime} min</Text>
                  <Text>{recipe.totalTime} min</Text>
                  <Text>{recipe.yield}</Text>
                  <VStack align="stretch">
                    {recipe.ingredientGroups.map(group => (
                      <Flex justify="space-between" key={group[0]}>
                        <Box flex={3}>
                          <Text>{group[0]}</Text>
                          {group[2] && (
                            <Text as="span" color="gray">
                              ({group[2]})
                            </Text>
                          )}
                        </Box>
                        <Box flex={1} marginLeft={10}>
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
              fallbackSrc="https://via.placeholder.com/150"
              alt="Recipe Image"
              boxSize="md"
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
      )}
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
