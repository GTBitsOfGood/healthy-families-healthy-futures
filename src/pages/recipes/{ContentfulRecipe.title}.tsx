import React from 'react';

import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';

interface Props extends PageProps {
  data: GatsbyTypes.RecipeByTitleQuery;
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
          <h2>
            Total Time: {recipe?.totalTime} {recipe?.totalTime == 1 ? 'min' : 'mins'}
          </h2>
          <h2>
            Preparation Time: {recipe?.prepTime} {recipe?.prepTime == 1 ? 'min' : 'mins'}
          </h2>
          <h2
            style={{
              fontWeight: 'bold',
            }}
          >
            Ingredients
          </h2>
          <p
            style={{
              display: 'block',
            }}
          >
            {recipe?.ingredients?.ingredients}
          </p>
          <h2
            style={{
              fontWeight: 'bold',
            }}
          >
            Preparation Directions
          </h2>
          <p
            style={{
              display: 'block',
            }}
          >
            {recipe?.prepDirections?.prepDirections}
          </p>
          <h2
            style={{
              fontWeight: 'bold',
            }}
          >
            Cooking Directions
          </h2>
          <p
            style={{
              display: 'block',
            }}
          >
            {recipe?.directions?.directions}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default RecipeTemplate;

export const pageQuery = graphql`
  query RecipeByTitle($title: String!) {
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
