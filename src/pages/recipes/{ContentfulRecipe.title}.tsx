import React from 'react';
import styled from '@emotion/styled';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, Text, Image, HStack, VStack, Box } from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import TitledList from 'src/components/TitledList';

import Layout from '../../components/Layout';
import { truncate } from 'fs/promises';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeByTitleQuery;
}


const CenterImage = styled(Image) `width: 100%`;
const Container = styled(Box) `padding: 0px 16px 20px 16px`;  
const Ingred = styled(Text) `padding: 30px 0px 10px 0px; font-size: 18px`;
const Minutes = styled(Text) `padding: 15px 0px 0px 0px; font-size: 16px`;
const Title = styled(Heading) `font-size: 18px`;
const Preparation = styled(Text) `padding: 15px 0px 0px 0px`
function RecipeTemplate(props: Props): JSX.Element {
  const recipe = props.data.contentfulRecipe;
  const ingredients = recipe?.ingredients?.ingredients?.split('-').filter(x => x);
  const prepDirections = recipe?.prepDirections?.prepDirections?.split('-').filter(x => x);
  const instructions = recipe?.directions?.directions?.split('-').filter(x => x);
  const notes = recipe?.notes?.notes?.split('-').filter(x => x);
  console.log(props.data.contentfulRecipe);

  // How do I know when to consider ingredient optional information when I am given a string?
  const ingredientPairs = ingredients?.reduce((pairs, _, index, ingredients) => {
    if (index % 2 == 0) {
      pairs.push(ingredients.slice(index, index + 2));
    }

    return pairs;
  }, []);

  // Need to discuss how we are determining if browser is in mobile view
  const isMobile = false;

  return (
    <Layout location={props.location}>
      {isMobile ? (
        <Container>
           <Title align = "center">{recipe?.title}</Title> 
           <CenterImage 
              src=""
              fallbackSrc="https://via.placeholder.com/150"
              alt="Recipe Image"
              boxSize="sm"
            ></CenterImage>
            <HStack align="start" spacing={10}>
            <VStack align="start">
                  <Minutes fontWeight="bold">Prep Time  </Minutes>
                  <Text fontWeight="bold">Total Time </Text>
                  <Text fontWeight="bold">Servings   </Text>
            </VStack>
            <VStack align="start">
                  <Minutes>{recipe?.prepTime} min</Minutes>
                  <Text>{recipe?.totalTime} min</Text>
                  <Text>{recipe?.yield}</Text>
            </VStack>
            </HStack>
            <Ingred fontWeight="bold">Ingredients</Ingred>
            <VStack align="start">
                    {ingredientPairs?.map(pair => (
                      <HStack key={pair[0]}>
                        <Text>{pair[0]}</Text>
                      </HStack>
                    ))}
            </VStack>
            <Preparation>
            <TitledList title="Prep" listElements={prepDirections}></TitledList>
            </Preparation>
          <br></br>
          <TitledList title="Instructions" listElements={instructions}></TitledList>
          {notes !== undefined && notes.length > 0 && (
            <Box>
              <br></br>
              <TitledList title="Notes" listElements={notes}></TitledList>
            </Box>
          )}
        </Container>

      ) : (
        <Box marginY={10}>
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
          <Flex justify="space-between" marginTop={5}>
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
                  <VStack align="start">
                    {ingredientPairs?.map(pair => (
                      <HStack key={pair[0]}>
                        <Text>{pair[0]}</Text>
                      </HStack>
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
          <TitledList title="Prep" listElements={prepDirections}></TitledList>
          <br></br>
          <TitledList title="Instructions" listElements={instructions}></TitledList>
          {notes !== undefined && notes.length > 0 && (
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
