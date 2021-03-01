import React from 'react';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, Text, Image, HStack, VStack, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { graphql, Link, PageProps } from 'gatsby';
import TitledList from 'src/components/TitledList';

import Layout from '../../components/Layout';

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
const Minutes = styled(Text)`
  padding: 15px 0px 0px 0px;
  font-size: 16px;
`;
const Title = styled(Heading)`
  font-size: 18px;
`;
const Preparation = styled(Text)`
  padding: 15px 0px 0px 0px;
`;

const ListOfIngreds = styled(Text) `
  font-size: 16px;
`;

function RecipeTemplate(props: Props): JSX.Element {
  const recipe = props.data.contentfulRecipe;
  const ingredients = recipe?.ingredients?.ingredients?.split('\n');
  const prepDirections = recipe?.prepDirections?.prepDirections
    ?.split('\n')
    .map(prepDir => prepDir.slice(2));
  const instructions = recipe?.directions?.directions
    ?.split('\n')
    .map(direction => direction.slice(2));
  const notes = recipe?.notes?.notes?.split('\n').map(note => note.slice(2));
  const ingredientGroups = [];

  if (ingredients) {
    let currentIndex = 0;

    while (currentIndex < ingredients.length) {
      const currentGroup = [];
      const amountIndex = currentIndex + 1;
      const notesIndex = currentIndex + 2;
      currentGroup.push(ingredients[currentIndex].slice(2));
      currentGroup.push(ingredients[amountIndex].slice(4));

      const hasNotes = notesIndex < ingredients.length && ingredients[notesIndex][0] == ' ';

      if (hasNotes) {
        currentGroup.push(ingredients[notesIndex].slice(4));
        currentIndex++;
      }

      ingredientGroups.push(currentGroup);
      currentIndex += 2;
    }
  }

  const isMobile = true;

  return (
    <Layout location={props.location}>
      {isMobile ? (
        <Container>
          <Title align="center">{recipe?.title}</Title>
          <CenterImage
            src={recipe?.mainImage?.file?.url}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Recipe Image"
            boxSize="sm"
          ></CenterImage>
          <HStack align="start" spacing={10}>
            <VStack align="start">
              <Minutes fontWeight="bold">Prep Time </Minutes>
              <Text fontWeight="bold">Total Time </Text>
              <Text fontWeight="bold">Servings </Text>
            </VStack>
            <VStack align="start">
              <Minutes>{recipe?.prepTime} min</Minutes>
              <Text>{recipe?.totalTime} min</Text>
              <Text>{recipe?.yield}</Text>
            </VStack>
          </HStack>
          <Ingred fontWeight="bold">Ingredients</Ingred>
          <ListOfIngreds>
          <VStack align="stretch">
                    {ingredientGroups?.map(pair => (
                      <Flex justify="space-between" key={pair[0]}>
                        <Box flex={3}>
                        <Text>{pair[1]} {pair[0]} </Text>
                          {pair[2] && (
                            <Text as="span" color="gray">
                              ({pair[2]})
                            </Text>
                          )}
                        </Box>
                      </Flex>
                    ))}
                  </VStack>

          </ListOfIngreds>
          <Preparation>
            <TitledList title="Prep" listElements={prepDirections}></TitledList>
          </Preparation>
          <br></br>
          <TitledList title="Instructions" listElements={instructions}></TitledList>
          {notes?.length > 0 && (
            <Box>
              <br></br>
              <TitledList title="Notes" listElements={notes}></TitledList>
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
            <VStack align="start" spacing={5}>
              <Heading>{recipe?.title}</Heading>
              <HStack align="start" spacing={10}>
                <VStack align="start">
                  <Text fontWeight="bold">Prep Time</Text>
                  <Text fontWeight="bold">Total Time</Text>
                  <Text fontWeight="bold">Yield</Text>
                  <Text fontWeight="bold">Ingredients</Text>
                </VStack>
                <VStack align="start">
                  <Text>{recipe?.prepTime} min</Text>
                  <Text>{recipe?.totalTime} min</Text>
                  <Text>{recipe?.yield}</Text>
                  <VStack align="stretch">
                    {ingredientGroups?.map(pair => (
                      <Flex justify="space-between" key={pair[0]}>
                        <Box flex={3}>
                          <Text>{pair[0]}</Text>
                          {pair[2] && (
                            <Text as="span" color="gray">
                              ({pair[2]})
                            </Text>
                          )}
                        </Box>
                        <Box flex={1} marginLeft={10}>
                          <Text>{pair[1]}</Text>
                        </Box>
                      </Flex>
                    ))}
                  </VStack>
                </VStack>
              </HStack>
            </VStack>
            <Image
              src={recipe?.mainImage?.file?.url}
              fallbackSrc="https://via.placeholder.com/150"
              alt="Recipe Image"
              boxSize="sm"
              objectFit="cover"
            ></Image>
          </Flex>
          <TitledList title="Prep" listElements={prepDirections}></TitledList>
          <br></br>
          <TitledList title="Instructions" listElements={instructions}></TitledList>
          {notes?.length > 0 && (
            <Box>
              <br></br>
              <TitledList title="Notes" listElements={notes}></TitledList>
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
