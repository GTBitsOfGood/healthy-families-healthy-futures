import React from 'react';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Box,
  Button,
  Grid,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import TitledParagraph from 'src/components/TitledParagraph';
import { useMiscText } from 'src/utils/useMiscText';

import Layout from '../../components/Layout';
import TitledList from '../../components/TitledList';
import { parseRecipe } from '../../utils/parse';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeByTitleQuery;
}

function RecipeTemplate(props: Props): JSX.Element {
  const contentfulRecipe = props.data.contentfulRecipe;
  const recipe = parseRecipe(contentfulRecipe as GatsbyTypes.ContentfulRecipe);

  const [isPrint] = useMediaQuery(['print']);
  const titleTextStyle = useBreakpointValue({
    base: isPrint ? 'heading1' : 'subheading1',
    md: 'heading1',
  });
  const miscText = useMiscText();

  return (
    <Layout data={props.data} pageName={recipe.title}>
      <Box w={{ base: '89%', md: 'none' }} margin={{ base: 5, md: 10 }}>
        <Link to="/recipes">
          <Button
            display={{ base: 'none', md: 'flex' }}
            variant="back"
            leftIcon={<ChevronLeftIcon />}
            marginBottom={10}
          >
            {miscText.backToRecipes}
          </Button>
        </Link>
        <Heading
          textStyle={titleTextStyle}
          textAlign={isPrint ? 'start' : { base: 'center', md: 'start' }}
          marginBottom={5}
        >
          {recipe.title}
        </Heading>
        <Flex
          direction={isPrint ? 'row' : { base: 'column-reverse', md: 'row' }}
          justify="space-between"
        >
          <VStack
            align="start"
            spacing={5}
            marginTop={isPrint ? 0 : { base: 5, md: 0 }}
            marginRight={{ base: 0, md: 10 }}
          >
            <HStack align="start" spacing={10}>
              <VStack align="start">
                <Text textStyle="body1" fontWeight="bold">
                  {miscText.cookTime}
                </Text>
                <Text textStyle="body1" fontWeight="bold">
                  {miscText.prepTime}
                </Text>
                <Text textStyle="body1" fontWeight="bold">
                  {miscText.totalTime}
                </Text>
                <Text textStyle="body1" fontWeight="bold">
                  {miscText.yield}
                </Text>
                <Text
                  display={isPrint ? 'flex' : { base: 'none', md: 'flex' }}
                  textStyle="body1"
                  fontWeight="bold"
                >
                  {miscText.ingredients}
                </Text>
              </VStack>

              <VStack align="start">
                <Text textStyle="body1">{recipe.cookTime} min</Text>
                <Text textStyle="body1">{recipe.prepTime} min</Text>
                <Text textStyle="body1">{recipe.totalTime} min</Text>
                <Text textStyle="body1">{recipe.yield}</Text>
                <Grid
                  display={isPrint ? 'grid' : ['none', null, 'grid']}
                  templateColumns="repeat(2, 1fr)"
                  rowGap={2}
                >
                  {recipe.ingredientGroups.map(group => (
                    <>
                      <Box className="ingredient-group">
                        <Text
                          textStyle="body1"
                          display={isPrint ? 'none' : { base: 'inline-block', md: 'none' }}
                        >
                          {group[1]}
                        </Text>{' '}
                        <Text
                          textStyle="body1"
                          textTransform={isPrint ? 'none' : { base: 'lowercase', md: 'none' }}
                        >
                          {group[0]}
                        </Text>{' '}
                        {group[2] && (
                          <Text textStyle="body1" color="gray">
                            ({group[2]})
                          </Text>
                        )}
                      </Box>
                      <Box
                        display={isPrint ? 'block' : { base: 'none', md: 'block' }}
                        textTransform="lowercase"
                        marginLeft={10}
                      >
                        <Text textStyle="body1">{group[1]}</Text>
                      </Box>
                    </>
                  ))}
                </Grid>
              </VStack>
            </HStack>
          </VStack>

          <Box
            w={{ base: isPrint ? '600px' : 'full', md: '600px' }}
            h={{ base: 'fit-content', md: '400px' }}
          >
            {recipe.imageFluid == null ? (
              <Box w="full" h={{ base: '222px', md: 'full' }} bg="gray.light" />
            ) : (
              <Img fluid={recipe.imageFluid} alt="Recipe Image" imgStyle={{ objectFit: 'cover' }} />
            )}
          </Box>
        </Flex>

        <Box display={isPrint ? 'none' : { md: 'none' }}>
          <Text mt="30px" textStyle="body1" fontWeight="bold">
            {miscText.ingredients}
          </Text>
          {recipe.ingredientGroups.map((group, key) => (
            <Flex key={key}>
              <Text mr={1} flex="none" textStyle="body3" display={{ md: 'none' }}>
                {group[1]}
              </Text>

              <Text
                mr={1}
                flex="none"
                textStyle="body3"
                textTransform={{ base: 'lowercase', md: 'none' }}
              >
                {group[0]}
              </Text>
              {group[2] && (
                <Text flex="none" textStyle="body3" color="gray">
                  ({group[2]})
                </Text>
              )}
            </Flex>
          ))}
        </Box>

        <br />
        <TitledList title={miscText.prep} listElements={recipe.prepDirections}></TitledList>
        <br />
        <TitledList title={miscText.instructions} listElements={recipe.instructions}></TitledList>
        {recipe.notes?.length > 0 && (
          <>
            <br />
            <TitledList title={miscText.notes} listElements={recipe.notes}></TitledList>
          </>
        )}
        {recipe.specialDietInfo?.length > 0 && (
          <>
            <br />
            <TitledParagraph
              title={miscText.specialDietInfo}
              paragraph={recipe.specialDietInfo}
            ></TitledParagraph>
          </>
        )}
      </Box>
    </Layout>
  );
}

export default RecipeTemplate;

export const pageQuery = graphql`
  query RecipeByTitle($title: String!) {
    ...Layout
    contentfulRecipe(title: { eq: $title }) {
      title
      mainImage {
        fluid {
          ...GatsbyContentfulFluid
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
      specialDietInformation {
        specialDietInformation
      }
    }
  }
`;
