import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Button } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, Link } from 'gatsby';

import RecipeCard from './RecipeCard';
import SectionHeader from './SectionHeader';

interface Props {
  data: GatsbyTypes.FeaturedRecipesSectionFragment;
}

const FeaturedRecipesSection = (props: Props) => {
  const recipes = props.data?.allContentfulRecipe?.nodes;

  return (
    <Box>
      <Box marginBottom={170}>
        <SectionHeader text="Featured Recipes" textPosition="right" />
      </Box>

      <Flex justifyContent="space-evenly">
        {recipes.map((recipe, i) => {
          return (
            <Box key={recipe.id}>
              <Link to={`/recipes/${slugify(String(recipe.title)) ?? ''}`}>
                <RecipeCard data={recipe} hideTime />
              </Link>
              <Flex justifyContent="flex-end">
                <Link to={`/recipes/${slugify(String(recipe.title)) ?? ''}`}>
                  <Button rightIcon={<ArrowForwardIcon />} variant="secondary" textTransform="none">
                    More
                  </Button>
                </Link>
              </Flex>
              {i === recipes.length - 1 && (
                <Flex justifyContent="flex-end" marginTop={82} marginBottom={155}>
                  <Link to="/recipes">
                    <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
                      View All Recipes
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
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        ...RecipeCard
      }
    }
  }
`;
