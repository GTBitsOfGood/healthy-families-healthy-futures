import React from 'react';

import { Box, Heading, Text, Stack, Button, Flex, Center } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.DonateBannerFragment;
}

function DonateBanner({ data }: Props): JSX.Element {
  const { findLocale } = useLocale();
  const section = findLocale(data.allContentfulDonateSection.nodes);

  return (
    <Flex>
      <Box w="40%" h={480} display={{ base: 'none', md: 'block' }}>
        <Box boxSize="480px" w="full">
          {section?.image?.fluid != null && (
            <Img
              fluid={section?.image.fluid}
              alt={section?.image.description}
              style={{ height: '480px' }}
              imgStyle={{ height: '480px' }}
            />
          )}
        </Box>
      </Box>
      <Center p={5} flex="1" h={{ md: 480 }} bg="creamsicle">
        <Box w={{ base: '32vw', md: 183 }} h={{ base: 'auto', md: 158 }}>
          {section?.logo?.fluid != null && (
            <Img fluid={section?.logo.fluid} alt={section?.logo.description} />
          )}
        </Box>
        <Stack spacing={{ base: 1, md: 5 }} marginLeft={{ base: 5, md: 55 }} direction="column">
          <Heading textAlign="left" textStyle="heading1" color="charcoal">
            {section?.title}
          </Heading>
          <Box w={{ base: 190, md: 320 }}>
            <Text textAlign="left" textStyle="body1" color="charcoal">
              {section?.body?.childMarkdownRemark?.rawMarkdownBody}
            </Text>
          </Box>
          <Link to={section?.ctaLink ?? '/donate'}>
            <Button variant="primary">{section?.ctaText}</Button>
          </Link>
        </Stack>
      </Center>
    </Flex>
  );
}

export default DonateBanner;

export const fragment = graphql`
  fragment DonateBanner on Query {
    allContentfulDonateSection {
      nodes {
        ctaLink
        ctaText
        body {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        title
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
          description
        }
        logo {
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
