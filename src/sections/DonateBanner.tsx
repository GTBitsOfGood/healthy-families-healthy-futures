import React from 'react';

import { Box, Heading, Text, Stack, Button, Flex, Center } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.DonateBannerFragment;
}

function DonateBanner({ data }: Props): JSX.Element {
  const section = data.contentfulDonateSection;

  return (
    <Flex>
      <Box w="40%" h={480}>
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
      <Center flex="1" h={480} bg="creamsicle">
        <Box w={183} h={158}>
          {section?.logo?.fluid != null && (
            <Img fluid={section?.logo.fluid} alt={section?.logo.description} />
          )}
        </Box>
        <Stack spacing={5} marginLeft={55} direction="column">
          <Heading textAlign="left" textStyle="heading1" color="charcoal">
            {section?.title}
          </Heading>
          <Box w={320}>
            <Text textAlign="left" textStyle="body1">
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
    contentfulDonateSection {
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
    }
  }
`;
