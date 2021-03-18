import React, { useEffect, useState } from 'react';

import { Divider, Flex, Grid, GridItem } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, Link, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';
import Pagination from 'src/components/Pagination';
import RecipeSidebar from 'src/components/RecipeSidebar';

import RecipeCard from '../components/RecipeCard';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeQueryQuery;
}

type IFilter = typeof filters;

const filters = [
  {
    category: 'Food Type',
    options: [],
  },
  {
    category: 'Ingredients',
    options: [],
  },
  {
    category: 'Time',
    options: ['< 15 min', '15-30 min', '31-45 min', '> 45 min'],
  },
];

function RecipesIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title;
  const recipes = props.data?.allContentfulRecipe?.nodes;

  const [filter, setFilter] = useState<IFilter>(filters);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [currentPage, setCurrentPage] = useState(0);

  const recipesPerPage = 6;
  const recipeStart = currentPage * recipesPerPage;
  const recipeEnd = recipeStart + recipesPerPage;
  const pageCount = Math.ceil(filteredRecipes.length / recipesPerPage);

  useEffect(() => {
    // Generates filters based on all tags from Contentful
    const generateFilters = () => {
      recipes.map((recipe): void => {
        if (recipe.foodTypeTags) {
          recipe.foodTypeTags.forEach((foodType: string): void => {
            if (!filters[0]['options'].includes(foodType)) {
              filters[0]['options'].push(foodType);
            }
          });
        }

        if (recipe.ingredientTags) {
          recipe.ingredientTags.forEach((ingredient: string): void => {
            if (!filters[1]['options'].includes(ingredient)) {
              filters[1]['options'].push(ingredient);
            }
          });
        }
      });
    };
    generateFilters();
    setFilter(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterChange = (newFilter: { [x: string]: string[] }): void => {
    const newFilteredRecipes = recipes.filter(recipe => {
      const {
        foodTypeTags,
        ingredientTags,
        totalTime,
        prepTime,
      }: {
        foodTypeTags: string[];
        ingredientTags: string[];
        totalTime: number;
        prepTime: number;
      } = recipe;

      let fitsIngredients = true;
      let fitsFoodType = true;
      let fitsTime = true;
      const time: number = totalTime + prepTime;

      if (newFilter['Ingredients']) {
        if (typeof newFilter['Ingredients'] === 'string') {
          fitsIngredients = ingredientTags?.includes(newFilter['Ingredients']);
        } else if (ingredientTags) {
          if (newFilter['Ingredients']?.some(tag => !ingredientTags.includes(tag))) {
            fitsIngredients = false;
          } else {
            fitsIngredients = true;
          }
        } else {
          fitsIngredients = false;
        }
      }

      if (newFilter['Food Type']) {
        if (typeof newFilter['Food Type'] === 'string') {
          fitsFoodType = foodTypeTags?.includes(newFilter['Food Type']);
        } else if (foodTypeTags) {
          fitsFoodType = !newFilter['Food Type']?.some(tag => !foodTypeTags.includes(tag));
        } else {
          fitsFoodType = false;
        }
      }

      if (newFilter['Time']) {
        if (typeof newFilter['Time'] === 'string' || newFilter['Time'].length === 1) {
          let timeRange: string | string[] = newFilter['Time'];
          if (newFilter['Time'].length === 1) {
            timeRange = newFilter['Time'][0];
          }
          if (timeRange === '< 15 min') {
            fitsTime = time < 15;
          } else if (timeRange === '15-30 min') {
            fitsTime = time >= 15 && time <= 30;
          } else if (timeRange === '31-45 min') {
            fitsTime = time >= 31 && time <= 45;
          } else {
            fitsTime = time > 45;
          }
        } else {
          fitsTime = false;
        }
      }

      return fitsFoodType && fitsIngredients && fitsTime;
    });

    setFilteredRecipes(newFilteredRecipes);
    setCurrentPage(0);
  };

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />

      <Grid templateColumns={{ base: '1fr', md: '250px 1px 1fr' }}>
        <GridItem>
          <RecipeSidebar location={props.location} filters={filter} onChange={handleFilterChange} />
        </GridItem>
        <Divider orientation="vertical" />
        <GridItem>
          <Grid
            templateColumns={{ base: 'repeat(auto-fit, 350px)', xl: 'repeat(3, 350px)' }}
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
  }
`;
