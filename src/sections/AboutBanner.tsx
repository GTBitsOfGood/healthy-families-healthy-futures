import React from 'react';

import { Box, Heading, HStack, VStack, Text, Center } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.AboutBannerFragment;
}

const AboutBanner = ({ data }: Props) => {
  const title = data.contentfulAboutBanner?.title;
  const bodyText = data.contentfulAboutBanner?.body?.childMarkdownRemark?.rawMarkdownBody;
  const mainImage = data.contentfulAboutBanner?.image;
  const logoImage = data.contentfulAboutBanner?.logo;

  return (
    <HStack spacing={0}>
      <Box w="50%" h={666} marginRight={0}>
        {mainImage?.fluid != null && (
          <Img style={{ height: '666px' }} fluid={mainImage.fluid} alt={mainImage.description} />
        )}
      </Box>
      <Center w="50%" h={666} bg="creamsicle">
        <Box h={155} w={{ base: 305, md: 679 }} bg="creamsicle"></Box>
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
    contentfulAboutBanner {
      title
      body {
        childMarkdownRemark {
          rawMarkdownBody
        }
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
    }
  }
`;
