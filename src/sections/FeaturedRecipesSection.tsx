import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Button } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, Link } from 'gatsby';
import RecipeCard from 'src/components/RecipeCard';
import SectionHeader from 'src/components/SectionHeader';
import { useLocale } from 'src/contexts/LocaleContext';
import { useMiscText } from 'src/utils/useMiscText';

interface Props {
  data: GatsbyTypes.FeaturedRecipesSectionFragment;
}

const FeaturedRecipesSection = (props: Props) => {
  const { filterLocale, findLocale } = useLocale();

  const recipes = filterLocale(props.data?.allContentfulRecipe?.nodes);
  const title = findLocale(props.data.allContentfulSectionTitles.nodes)?.featuredRecipes;

  const miscText = useMiscText();

  return (
    <Box>
      <Box marginBottom={{ base: 10, md: 170 }}>
        <SectionHeader text={title ?? 'Featured Recipes'} textPosition="right" />
      </Box>
      {/* recipe cards for mobile version */}
      <Flex display={{ base: 'flex', md: 'none' }} justifyContent="space-evenly">
        {recipes.map((recipe, i) => {
          if (i < 2) {
            return (
              <Box key={recipe.id}>
                <Link to={`/recipes/${slugify(String(recipe.title)) ?? ''}`}>
                  <RecipeCard data={recipe} hideTime />
                </Link>
                <Flex justifyContent="flex-end">
                  <Link to={`/recipes/${slugify(String(recipe.title)) ?? ''}`}>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      variant="secondary"
                      textTransform="none"
                    >
                      {miscText.more}
                    </Button>
                  </Link>
                </Flex>
                {i === recipes.length - 2 && (
                  <Flex justifyContent="flex-end" marginTop={10} marginBottom={10}>
                    <Link to="/recipes">
                      <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
                        {miscText.viewAllRecipes}
                      </Button>
                    </Link>
                  </Flex>
                )}
              </Box>
            );
          }
        })}
      </Flex>
      {/* recipe cards for web version */}
      <Flex display={{ base: 'none', md: 'flex' }} justifyContent="space-evenly">
        {recipes.map((recipe, i) => {
          return (
            <Box key={recipe.id}>
              <Link to={`/recipes/${slugify(String(recipe.title)) ?? ''}`}>
                <RecipeCard data={recipe} hideTime />
              </Link>
              <Flex justifyContent="flex-end">
                <Link to={`/recipes/${slugify(String(recipe.title)) ?? ''}`}>
                  <Button rightIcon={<ArrowForwardIcon />} variant="secondary" textTransform="none">
                    {miscText.more}
                  </Button>
                </Link>
              </Flex>
              {i === recipes.length - 1 && (
                <Flex justifyContent="flex-end" marginTop={82} marginBottom={155}>
                  <Link to="/recipes">
                    <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
                      {miscText.viewAllRecipes}
                    </Button>
                  </Link>
                </Flex>
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default FeaturedRecipesSection;

export const fragment = graphql`
  fragment FeaturedRecipesSection on Query {
    allContentfulSectionTitles {
      nodes {
        featuredRecipes
        node_locale
      }
    }
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        ...RecipeCard
        node_locale
      }
    }
  }
`;
