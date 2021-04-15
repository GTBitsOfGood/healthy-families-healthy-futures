import React from 'react';

import { Box, Heading, HStack, VStack, Text, Center } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.AboutBannerFragment;
}

const AboutBanner = ({ data }: Props) => {
  const { findLocale } = useLocale();

  const banner = findLocale(data.allContentfulAboutBanner.nodes);
  const title = banner?.title;
  const bodyText = banner?.body?.body;
  const mainImage = banner?.image;
  const logoImage = banner?.logo;

  return (
    <HStack spacing={0}>
      <Box w="50%" h={666} marginRight={0}>
        {mainImage?.fluid != null && (
          <Img style={{ height: '666px' }} fluid={mainImage.fluid} alt={mainImage.description} />
        )}
      </Box>
      <Center w="50%" h={666} bg="creamsicle">
        <VStack spacing={5}>
          <Box w={{ base: 100, md: 183 }} h={158}>
            {logoImage?.fluid != null && (
              <Img fluid={logoImage.fluid} alt={logoImage.description} />
            )}
          </Box>
          <Heading
            textAlign="center"
            textStyle="heading1"
            textTransform="uppercase"
            color="charcoal"
          >
            {title}
          </Heading>
          <Box w={{ base: 175, md: 500 }}>
            <Text textAlign="center" textStyle="body1">
              {bodyText}
            </Text>
          </Box>
        </VStack>
      </Center>
    </HStack>
  );
};

export default AboutBanner;

export const fragment = graphql`
  fragment AboutBanner on Query {
    allContentfulAboutBanner {
      nodes {
        title
        body {
          body
        }
        logo {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
          description
        }
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
