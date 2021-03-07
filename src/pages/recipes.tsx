import React from 'react';

import { Divider, Grid, GridItem } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, Link, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';
import RecipeSidebar from 'src/components/RecipeSidebar';

import RecipeCard from '../components/RecipeCard';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeQueryQuery;
}

function RecipesIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title;
  const recipes = props.data?.allContentfulRecipe?.nodes;

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />

      <Grid templateColumns={{ base: '1fr', md: '250px 1px 1fr' }}>
        <GridItem>
          <RecipeSidebar location={props.location} />
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
