import React from 'react';

import { Box, Center, Heading } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.DonateHeaderFragment;
}

const DonateHeader = ({ data }: Props) => {
  const { findLocale } = useLocale();
  const banner = findLocale(data.allContentfulDonateBanner.nodes);

  return (
    <Box
      minH={[213, null, 510]}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
    >
      {banner?.image?.fluid != null && (
        <Img
          fluid={banner?.image.fluid}
          alt={banner?.image.description}
          style={{ height: `100%`, position: 'absolute', width: `100%`, top: 0 }}
        />
      )}
      <Center zIndex={2}>
        <Center w="507px" h="354px" bg="white" boxShadow="card">
          <Heading
            color="creamsicle.500"
            fontSize="50px"
            lineHeight="68px"
            textTransform="uppercase"
          >
            {banner?.title ?? 'Title Missing'}
          </Heading>
        </Center>
      </Center>
    </Box>
  );
};

export default DonateHeader;

export const fragment = graphql`
  fragment DonateHeader on Query {
    allContentfulDonateBanner {
      nodes {
        title
        description
        ctaText
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
          description
        }
        node_locale
      }
    }
  }
`;
