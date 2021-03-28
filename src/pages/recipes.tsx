import React, { useState, useEffect, useCallback } from 'react';

import { Divider, Flex, Grid, GridItem } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, Link, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';
import Pagination from 'src/components/Pagination';
import RecipeSidebar from 'src/components/RecipeSidebar';
import { SelectedRecipeFilters } from 'src/utils/types';

import RecipeCard from '../components/RecipeCard';
import { initRecipeFilters, filterRecipes } from '../utils/filter';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeQueryQuery;
}

function RecipesIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title;
  const recipes = props.data?.allContentfulRecipe?.nodes;
  const foodTypeTags = props.data?.allContentfulFoodTypeTag?.nodes;
  const ingredientTags = props.data?.allContentfulIngredientTag?.nodes;
  const timeListStr = props.data?.contentfulTimeList?.timeList;
  const [recipeFilters, setRecipeFilters] = useState<SelectedRecipeFilters>({});
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [currentPage, setCurrentPage] = useState(0);

  const recipesPerPage = 6;
  const recipeStart = currentPage * recipesPerPage;
  const recipeEnd = recipeStart + recipesPerPage;
  const pageCount = Math.ceil(filteredRecipes.length / recipesPerPage);

  useEffect(() => {
    setRecipeFilters(initRecipeFilters(foodTypeTags, ingredientTags, timeListStr));
  }, [foodTypeTags, ingredientTags, timeListStr]);

  const handleFilterChange = useCallback(
    (currentFilters: SelectedRecipeFilters): void => {
      setFilteredRecipes(filterRecipes(recipes, currentFilters));
      setCurrentPage(0);
    },
    [recipes],
  );

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />

      <Grid templateColumns={{ base: '1fr', md: '250px 1px 1fr' }}>
        <GridItem>
          <RecipeSidebar
            location={props.location}
            filters={recipeFilters}
            onChange={handleFilterChange}
          />
        </GridItem>
        <Divider orientation="vertical" />
        <GridItem>
          <Grid
            templateColumns={{ base: 'repeat(2, 183px)', md: 'repeat(3, 350px)' }}
            justifyItems="center"
            justifyContent="space-evenly"
            rowGap="35px"
            marginBottom={5}
          >
            {filteredRecipes.slice(recipeStart, recipeEnd).map(node => {
              return (
                <GridItem key={node.id}>
                  <Link to={`/recipes/${slugify(String(node.title)) ?? ''}`}>
                    <RecipeCard data={node} />
                  </Link>
                </GridItem>
              );
            })}
          </Grid>
          <Flex justify="center">
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              onChange={pageNum => setCurrentPage(pageNum)}
            />
          </Flex>
        </GridItem>
      </Grid>
    </Layout>
  );
}

export default RecipesIndex;

export const pageQuery = graphql`
  query RecipeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulRecipe {
      nodes {
        ...RecipeCard
      }
    }
    allContentfulIngredientTag {
      nodes {
        tagName
        recipe {
          id
        }
      }
    }
    allContentfulFoodTypeTag {
      nodes {
        tagName
        recipe {
          id
        }
      }
    }
    contentfulTimeList {
      timeList
    }
  }
`;
