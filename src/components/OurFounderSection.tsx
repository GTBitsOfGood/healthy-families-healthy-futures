import React from 'react';

import { HStack, Box, VStack, Text, Center, Button } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SectionHeader from './SectionHeader';

interface Props {
  data: GatsbyTypes.OurFounderSectionFragment;
}

const OurFounderSection = ({ data }: Props) => {
  const founder = data.contentfulOurFounder;

  return (
    <>
      <Box>
        <SectionHeader text={founder?.title ?? 'Our Founder'} textPosition="right" />
      </Box>

      <Center h={748}>
        <VStack spacing="100px">
          <HStack justifyContent="center" spacing={20}>
            <Box w="272px">
              {founder?.image?.fluid != null && (
                <Img fluid={founder?.image.fluid} alt={founder.image.description} />
              )}
            </Box>
            <Center boxShadow="2xl" w={712} h={334}>
              <Box w={580}>
                <Text textAlign="left" textStyle="body1">
                  {founder?.description?.childMarkdownRemark?.rawMarkdownBody}
                </Text>
              </Box>
            </Center>
          </HStack>
          <Button variant="neutral">{founder?.ctaText}</Button>
        </VStack>
      </Center>
    </>
  );
};

export default OurFounderSection;

export const fragment = graphql`
  fragment OurFounderSection on Query {
    contentfulOurFounder {
      title
      ctaLink
      ctaText
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
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
