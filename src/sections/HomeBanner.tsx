import React from 'react';

import { Box, Heading, Button, Flex } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.HomeBannerFragment;
}

const HomeBanner = ({ data }: Props) => {
  const { findLocale } = useLocale();

  const banner = findLocale(data?.allContentfulHomeBanner?.nodes);

  return (
    <Flex position="relative" h={{ base: 600, md: 785 }} alignItems="center">
      {banner?.image?.fluid != null && (
        <Img
          fluid={banner?.image.fluid}
          alt={banner?.image.description}
          style={{ height: `100%`, position: 'absolute', width: `100%`, top: 0 }}
        />
      )}
      <Box
        w={{ base: '90vw', md: 560 }}
        ml={{ base: 5, md: `8.33vw`, lg: `12.5vw` }}
        zIndex={2}
        bgColor="white"
        p={8}
        boxShadow="card"
      >
        <Heading textStyle="heading1" color="creamsicle.500">
          {banner?.titleLine1}
        </Heading>
        <Heading textStyle="heading1" color="creamsicle.500">
          {banner?.titleLine2}
        </Heading>
        <Heading mt="13px" fontWeight="light" textStyle="subheading1" fontSize="16px">
          {banner?.body?.body}
        </Heading>
        <Box marginTop={31}>
          <Link to={banner?.ctaLink ?? '/about'}>
            <Button variant="neutral" fontSize="16px">
              {banner?.ctaText}
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeBanner;

export const fragment = graphql`
  fragment HomeBanner on Query {
    allContentfulHomeBanner {
      nodes {
        titleLine1
        titleLine2
        body {
          body
        }
        ctaLink
        ctaText
        image {
          fluid(quality: 100, maxWidth: 1440) {
            ...GatsbyContentfulFluid
          }
          description
        }
        node_locale
      }
    }
  }
`;
