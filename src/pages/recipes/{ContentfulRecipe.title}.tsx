import React from 'react';

import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';
import heroStyles from '../../css/Hero.module.css';
import styles from '../css/Blog.module.css';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeByNameQuery;
}

function RecipeTemplate(props: Props): JSX.Element {
  const recipe = props.data.contentfulRecipe;
  const siteTitle = props.data.site?.siteMetadata?.title;

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${recipe?.title ?? ''} | ${siteTitle ?? ''}`} />
        <div className="wrapper">
          <h1 className="section-headline">{recipe?.title}</h1>
          <h2>{recipe?.totalTime}</h2>
          <h2>{recipe?.prepTime}</h2>
          <p
            style={{
              display: 'block',
            }}
          >{recipe?.ingredients?.ingredients}</p>
          <p
            style={{
              display: 'block',
            }}
          >{recipe?.prepDirections?.prepDirections}</p>
          <p
            style={{
              display: 'block',
            }}
          >{recipe?.directions?.directions}</p>
        </div>
      </div>
    </Layout>
  );
}

export default RecipeTemplate;

export const pageQuery = graphql`
  query RecipeByName($title: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulRecipe(title: { eq: $title }) {
      title
      totalTime
      prepTime
      ingredients {
        ingredients
      }
      directions {
        directions
      }
      prepDirections {
        prepDirections
      }
    }
  }
`;
