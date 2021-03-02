import React from 'react';
import { TimeIcon } from '@chakra-ui/icons';
import { Text, Flex, Spacer } from '@chakra-ui/react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

interface Props {
  data: GatsbyTypes.RecipeCardFragment;
}

function RecipeCard({ data }: Props): JSX.Element {
  return (
    <div style={{ marginRight: '10%', marginBottom: '10%' }}>
      <Flex>
        <h3
          style={{
            fontWeight: 850,
            float: 'left',
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          {data.title}
        </h3>
        <Spacer />
        <div style={{ float: 'right', display: 'flex' }}>
          <TimeIcon style={{ marginTop: 3 }} color="green" />
          <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: 'bold' }} color="green">
            {Number(data.totalTime) + Number(data.prepTime)} min
          </Text>
        </div>
      </Flex>

      {data.mainImage?.fluid == null ? (
        <div style={{ width: 400, height: 260, backgroundColor: 'lightgray' }}> </div>
      ) : (
        <Img alt="" fluid={data.mainImage?.fluid} />
      )}

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore
      </Text>
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
