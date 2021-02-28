import React from 'react';

import { Divider, Grid, GridItem } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, Link, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';
import RecipeSidebar from 'src/components/RecipeSidebar';

import RecipeCard from '../components/RecipeCard';
import styles from '../css/Blog.module.css';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeQueryQuery;
}

function RecipesIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title;
  const recipes = props.data?.allContentfulRecipe?.nodes;

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />

      <Grid templateColumns={{ base: '1fr', md: '250px 1fr' }} columnGap={5}>
        <GridItem>
          <RecipeSidebar location={props.location} />
        </GridItem>

        <GridItem>
          <div className={styles.hero}>Recipes</div>
          <div className="wrapper">
            <h2 className="section-headline">Wonderful Recipes</h2>
            <Divider />
            <ul className="article-list">
              {recipes.map(node => {
                return (
                  <li key={node.id}>
                    <Link to={`/recipes/${slugify(String(node.title)) ?? ''}`}>
                      <RecipeCard data={node} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
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
        id
        prepTime
        title
        totalTime
        mainImage {
          fluid(maxWidth: 339, maxHeight: 219, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid
          }
        }
        updatedAt
        yield
      }
    }
  }
`;
