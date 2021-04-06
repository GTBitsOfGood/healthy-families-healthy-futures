import React, { useContext } from 'react';

import { Box, Heading, HStack, VStack, Text, Center } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import LocaleContext from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.AboutBannerFragment;
}

const AboutBanner = ({ data }: Props) => {
  const { locale } = useContext(LocaleContext);

  const banner = data.allContentfulAboutBanner.nodes.find(d => d.node_locale === locale);
  const title = banner?.title;
  const bodyText = banner?.body?.childMarkdownRemark?.rawMarkdownBody;
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
        <Box h={155} bg="creamsicle"></Box>
        <VStack spacing={5}>
          <Box w={183} h={158}>
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
          <Box w={500}>
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
        node_locale
      }
    }
  }
`;
