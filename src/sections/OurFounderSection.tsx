import React from 'react';

import { Stack, Box, VStack, Text, Button, useTheme } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'src/components/SectionHeader';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.OurFounderSectionFragment;
}

const OurFounderSection = ({ data }: Props) => {
  const theme = useTheme();
  const { findLocale } = useLocale();

  const founder = findLocale(data.allContentfulOurFounder.nodes);

  return (
    <Box id="our-founder">
      <Box>
        <SectionHeader text={founder?.title ?? 'Our Founder'} textPosition="right" />
      </Box>

      <VStack spacing="100px" mx="auto" my={20}>
        <Stack
          justifyContent="center"
          spacing={20}
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center' }}
        >
          <Box
            w="272px"
            h="272px"
            borderRadius="50%"
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
            boxShadow={`9px 9px 0px 0px ${theme.colors.green[500]}`}
          >
            {founder?.image?.fluid != null && (
              <Img
                style={{ overflow: 'visible' }}
                imgStyle={{ borderRadius: '50%' }}
                fluid={founder?.image.fluid}
                alt={founder.image.description}
              />
            )}
          </Box>
          <Box
            boxShadow="card"
            w={{ base: '80vw', md: '45vw' }}
            px={{ base: 10, md: 35 }}
            py={{ base: 10, md: 30 }}
          >
            <Text textAlign="left" textStyle="body1">
              {founder?.description?.description}
            </Text>
          </Box>
        </Stack>
        <Button variant="neutral">{founder?.ctaText}</Button>
      </VStack>
    </Box>
  );
};

export default OurFounderSection;

export const fragment = graphql`
  fragment OurFounderSection on Query {
    allContentfulOurFounder {
      nodes {
        title
        ctaLink
        ctaText
        description {
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
