import React, { useState, useEffect } from 'react';

import { Divider, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, Link, navigate, PageProps } from 'gatsby';
import { parse, stringify } from 'query-string';
import Layout from 'src/components/Layout';
import Pagination from 'src/components/Pagination';
import RecipeCard from 'src/components/RecipeCard';
import RecipeSidebar from 'src/components/RecipeSidebar';
import { useLocale } from 'src/contexts/LocaleContext';
import { initRecipeFilters, filterRecipes } from 'src/utils/filter';
import { SelectedRecipeFilters } from 'src/utils/types';
import { useMiscText } from 'src/utils/useMiscText';
import { entries, keys, removeNulls } from 'src/utils/util';

import { NoSearchIcon } from '../components/Icons';

interface Props extends PageProps {
  data: GatsbyTypes.RecipePageQuery;
}

function RecipesIndex(props: Props): JSX.Element {
  const { filterLocale } = useLocale();

  const recipes = filterLocale(props.data?.allContentfulRecipe?.nodes);
  const foodTypeTags = filterLocale(props.data?.allContentfulFoodTypeTag?.nodes);
  const ingredientTags = filterLocale(props.data?.allContentfulIngredientTag?.nodes);
  const timeListStr = props.data?.contentfulTimeList?.timeList;

  const recipeFilters = initRecipeFilters(foodTypeTags, ingredientTags, timeListStr);

  const queryObj = parse(props.location.search, { arrayFormat: 'comma' });

  const miscText = useMiscText();

  const initialFilters = Object.fromEntries(
    keys(recipeFilters).map(category => {
      const value = queryObj[category];
      const tagKeys = typeof value === 'string' ? [value] : value ?? [];

      return [
        category,
        removeNulls(tagKeys.map(tag => recipeFilters[category].find(option => tag === option.key))),
      ];
    }),
  );

  const querySearchValue = parse(props.location.search, { arrayFormat: 'comma' }).search;
  const defaultSearch: string =
    querySearchValue == null
      ? '' // if it's null, default to empty string
      : typeof querySearchValue === 'object'
      ? querySearchValue[0] // it usually shouldn't be an array, but if it is, grab the first element
      : querySearchValue;

  // Note: selectedFilters can include other query parameters that are not necessarily used for filtering
  const [selectedFilters, updateSelectedFilters] = useState<SelectedRecipeFilters>(
    initialFilters as SelectedRecipeFilters,
  );
  const [searchQuery, setSearchQuery] = useState(defaultSearch);

  useEffect(() => {
    // console.log(selectedFilters);
    const newQueries = stringify(
      {
        ...Object.fromEntries(
          entries(selectedFilters).map(([category, tags]) => [category, tags.map(tag => tag.key)]),
        ),
        search: searchQuery === '' ? undefined : searchQuery,
      },
      { arrayFormat: 'comma' },
    );
    const newUrl = `${location.pathname}?${newQueries}`;
    void navigate(newUrl, {
      state: {
        disableScrollUpdate: true,
      },
      replace: true,
    });
    setCurrentPage(0);
  }, [selectedFilters, searchQuery]);

  const filteredRecipes = filterRecipes(recipes, selectedFilters, searchQuery);
  const [currentPage, setCurrentPage] = useState(0);

  const recipesPerPage = 6;
  const recipeStart = currentPage * recipesPerPage;
  const recipeEnd = recipeStart + recipesPerPage;
  const pageCount = Math.ceil(filteredRecipes.length / recipesPerPage);

  return (
    <Layout data={props.data} pageName="Recipes">
      <Grid templateColumns={{ base: '1fr', md: '250px 1px 1fr' }} mb={10}>
        <GridItem>
          <RecipeSidebar
            filters={recipeFilters}
            selectedFilters={selectedFilters}
            updateSelectedFilters={updateSelectedFilters}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </GridItem>
        <Divider orientation="vertical" />
        <GridItem>
          {filteredRecipes.length > 0 ? (
            <>
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
            </>
          ) : (
            <Flex py="100px" direction="column" align="center">
              <NoSearchIcon h="46px" w="52px" fill="#323232" />
              <Heading fontSize="35px" lineHeight="48px">
                {miscText.recipeSearchNoResults}
              </Heading>
              <Heading fontSize="20px" lineHeight="28px" color="#A5A5A5">
                {miscText.recipeSearchNoResults2}
              </Heading>
            </Flex>
          )}
        </GridItem>
      </Grid>
    </Layout>
  );
}

export default RecipesIndex;

export const pageQuery = graphql`
  query RecipePage {
    ...Layout
    allContentfulRecipe {
      nodes {
        ...RecipeCard
        directions {
          directions
        }
        node_locale
      }
    }
    allContentfulIngredientTag {
      nodes {
        tagName
        key
        recipe {
          id
        }
        node_locale
      }
    }
    allContentfulFoodTypeTag {
      nodes {
        tagName
        key
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
