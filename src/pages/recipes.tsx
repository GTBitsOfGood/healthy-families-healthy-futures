import React, { useState, useEffect } from 'react';

import { Divider, Flex, Grid, GridItem } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, Link, navigate, PageProps } from 'gatsby';
import { parse, stringify } from 'query-string';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';
import Pagination from 'src/components/Pagination';
import RecipeCard from 'src/components/RecipeCard';
import RecipeSidebar from 'src/components/RecipeSidebar';
import { useLocale } from 'src/contexts/LocaleContext';
import { initRecipeFilters, filterRecipes } from 'src/utils/filter';
import { SelectedRecipeFilters } from 'src/utils/types';
import { entries } from 'src/utils/util';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeQueryQuery;
}

function RecipesIndex(props: Props): JSX.Element {
  const { filterLocale } = useLocale();
  const siteTitle = props.data.site?.siteMetadata?.title;

  const recipes = filterLocale(props.data?.allContentfulRecipe?.nodes);
  const foodTypeTags = filterLocale(props.data?.allContentfulFoodTypeTag?.nodes);
  const ingredientTags = filterLocale(props.data?.allContentfulIngredientTag?.nodes);
  const timeListStr = props.data?.contentfulTimeList?.timeList;

  const recipeFilters = initRecipeFilters(foodTypeTags, ingredientTags, timeListStr);

  const defaultFilters = Object.fromEntries(
    entries(parse(props.location.search, { arrayFormat: 'comma' })).map(([category, value]) => [
      category,
      typeof value === 'string' ? [value] : value,
    ]),
  );

  // Note: selectedFilters can include other query parameters that are not necessarily used for filtering
  const [selectedFilters, updateSelectedFilters] = useState<SelectedRecipeFilters>(defaultFilters);

  useEffect(() => {
    const newQueries = stringify(selectedFilters, { arrayFormat: 'comma' });
    const newUrl = `${location.pathname}?${newQueries}`;
    void navigate(newUrl, {
      state: {
        disableScrollUpdate: true,
      },
      replace: true,
    });
    setCurrentPage(0);
  }, [selectedFilters]);

  const filteredRecipes = filterRecipes(recipes, selectedFilters);
  const [currentPage, setCurrentPage] = useState(0);

  const recipesPerPage = 6;
  const recipeStart = currentPage * recipesPerPage;
  const recipeEnd = recipeStart + recipesPerPage;
  const pageCount = Math.ceil(filteredRecipes.length / recipesPerPage);

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />

      <Grid templateColumns={{ base: '1fr', md: '250px 1px 1fr' }}>
        <GridItem>
          <RecipeSidebar
            filters={recipeFilters}
            selectedFilters={selectedFilters}
            updateSelectedFilters={updateSelectedFilters}
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
        node_locale
      }
    }
    allContentfulIngredientTag {
      nodes {
        tagName
        recipe {
          id
        }
        node_locale
      }
    }
    allContentfulFoodTypeTag {
      nodes {
        tagName
        recipe {
          id
        }
        node_locale
      }
    }
    contentfulTimeList {
      timeList
    }
  }
`;
