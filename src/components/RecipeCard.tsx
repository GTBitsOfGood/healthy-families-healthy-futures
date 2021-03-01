import React from 'react';
import { TimeIcon } from '@chakra-ui/icons';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

interface Props {
  data: GatsbyTypes.RecipeCardFragment;
}

function RecipeCard({ data }: Props): JSX.Element {
  return (
    <div style={{padding: '50px 10px 50px 10px', marginRight: '25px'}}>
      <div style={{ marginBottom: '5%'}}>
        <h3
          style={{
            position: 'absolute',
            fontWeight: 850,
            textAlign: 'left',
            fontSize: 14,
          }}
        >
          {data.title}
        </h3>
        <TimeIcon
          style={{ marginTop: 3, color: '#65BF73', position: 'absolute', marginLeft: '78%'}}
        />
        <h1 style={{ fontSize: 14, fontWeight: 'bold', color: '#65BF73', textAlign: 'right'}}>
          {Number(data.totalTime) + Number(data.prepTime)} min
        </h1>
      </div>

      {data.mainImage?.fluid == null ? (
        <p> Image not found</p>
      ) : (
        <Img alt="" fluid={data.mainImage?.fluid} />
      )}
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore
      </h3>
    </div>
  );
}

export default RecipeCard;
export const fragment = graphql`
  fragment RecipeCard on ContentfulRecipe {
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
`;
