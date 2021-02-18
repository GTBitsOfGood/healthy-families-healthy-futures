import React from 'react';

import { graphql, PageProps } from 'gatsby';

import Layout from '../../components/Layout';
import heroStyles from '../../css/Hero.module.css';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeByNameQuery;
}

function RecipeTemplate(props: Props): JSX.Element {
  const recipe = props.data.contentfulRecipe;

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <div className={heroStyles.hero}></div>
        <div className="wrapper">
          <h1 className="section-headline">{recipe?.title}</h1>
          <h2>{recipe?.totalTime}</h2>
          <h2>{recipe?.prepTime}</h2>
          <p
            style={{
              display: 'block',
            }}
          ></p>
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
