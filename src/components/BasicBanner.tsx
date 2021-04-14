import React from 'react';

import { Box, Center, Heading } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data?: GatsbyTypes.BasicBannerFragment;
}

const BasicBanner = ({ data }: Props) => {
  return (
    <Box
      minH={[213, null, 627]}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
    >
      {data?.image?.fluid != null && (
        <Img
          fluid={data?.image.fluid}
          alt={data?.image.description}
          style={{ height: `100%`, position: 'absolute', width: `100%`, top: 0 }}
        />
      )}
      <Center
        bg="creamsicle"
        p={[2, null, 10]}
        marginLeft={[5, null, 20]}
        w="fit-content"
        zIndex={2}
      >
        <Heading textStyle="pageHeading">{data?.title ?? 'Title Missing'}</Heading>
      </Center>
    </Box>
  );
};

export default BasicBanner;

export const fragment = graphql`
  fragment BasicBanner on ContentfulHeaderSection {
    title
    image {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
      description
    }
  }
`;
