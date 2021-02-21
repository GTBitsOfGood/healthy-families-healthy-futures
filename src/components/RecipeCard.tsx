import React from 'react';

//import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.RecipeQueryQuery;
}

function RecipeCard({ data }: Props): JSX.Element {
  return (
    <div>
      <div>
        <h3 style={{ display: 'inline-block', marginRight: '15%' }}> {data.title} </h3>
        <h1 style={{ color: '#65BF73', display: 'inline-block' }}>
          {data.totalTime + data.prepTime} min
        </h1>
      </div>

      {/* {data.mainImage?.fluid == null ? <p>Image not found</p> : <Img alt="" fluid={data.mainImage?.fluid} />} */}
      <h3> Yields: {data.yieldAmt}</h3>
    </div>
  );
}

export default RecipeCard;
