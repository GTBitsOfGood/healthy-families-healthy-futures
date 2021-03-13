import React, { createContext, useEffect, useState } from 'react';

import { Divider, Grid, GridItem } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, Link, PageProps } from 'gatsby';
import { ParsedQuery } from 'query-string';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';
import RecipeSidebar from 'src/components/RecipeSidebar';

import RecipeCard from '../components/RecipeCard';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeQueryQuery;
}

type IFilter = typeof filters;

const filters = [
  {
    category: 'Food Type',
    options: ['Vegan', 'Vegetarian', 'Breakfast', 'Lunch'],
  },
  {
    category: 'Ingredients',
    options: ['Beans', 'Fruit', 'Protein', 'Dairy'],
  },
  {
    category: 'Time',
    options: ['< 10 min', '15-30 min', '31-45 min'],
  },
];

function RecipesIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title;
  const recipes = props.data?.allContentfulRecipe?.nodes;

  const [filter, setFilter] = useState<IFilter>(filters);
  const [currentFilter, setCurrentFilter] = useState<{ [x: string]: string | string[] | null }>();

  const handleFilterChange = (newFilter: { [x: string]: string | string[] | null }): void => {
    setCurrentFilter(newFilter);
  };

  useEffect(() => {
    console.log(currentFilter);
  }, [currentFilter]);

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
          >
            {recipes.map(node => {
              return (
                <GridItem key={node.id}>
                  <Link to={`/recipes/${slugify(String(node.title)) ?? ''}`}>
                    <RecipeCard data={node} />
                  </Link>
                </GridItem>
              );
            })}
          </Grid>
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
