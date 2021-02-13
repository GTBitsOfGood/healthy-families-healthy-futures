import React from 'react';

import { Divider } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';

import styles from '../css/Blog.module.css';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeQueryQuery;
}

function RecipesIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title;
  const posts = props.data?.allContentfulRecipe?.edges;

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>Recipes</div>
        <div className="wrapper">
          <h2 className="section-headline">Wonderful Recipes</h2>
          <Divider />
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.id}>
                  <h1>{node.title}</h1>{' '}
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
      edges {
        node {
          id
          prepTime
          title
          totalTime
          updatedAt
        }
      }
    }
  }
`;
