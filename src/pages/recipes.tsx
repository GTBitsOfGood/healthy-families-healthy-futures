import React from 'react';

import { Divider } from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';

import styles from '../css/Blog.module.css';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeQueryQuery;
}

function RecipesIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title;
  const recipes = props.data?.allContentfulRecipe?.nodes;

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>Recipes</div>
        <div className="wrapper">
          <h2 className="section-headline">Wonderful Recipes</h2>
          <Divider />
          <ul className="article-list">
            {recipes.map(node => {
              return (
                <li key={node.id}>
                  <Link to={`/recipes/${node.title ?? ''}`}>
                    <h1>{node.title}</h1>{' '}
                  </Link>
                  <h1>{`${String(node.prepTime)} ${node.prepTime === 1 ? 'min' : 'mins'}`}</h1>
                  <h1>{`${String(node.totalTime)} ${node.totalTime === 1 ? 'min' : 'mins'}`}</h1>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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
        updatedAt
      }
    }
  }
`;
