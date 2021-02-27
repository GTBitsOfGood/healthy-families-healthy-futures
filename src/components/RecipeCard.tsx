import React from 'react';
import { TimeIcon } from '@chakra-ui/icons';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.RecipeQueryQuery;
}

function RecipeCard({ data }: Props): JSX.Element {
  return (
    <div>
      <div style={{ marginBottom: '5%' }}>
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
          style={{ marginTop: 3, color: '#65BF73', position: 'absolute', marginLeft: '28.5%' }}
        />
        <h1 style={{ fontSize: 14, fontWeight: 'bold', color: '#65BF73', textAlign: 'right' }}>
          {data.totalTime + data.prepTime} min
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
