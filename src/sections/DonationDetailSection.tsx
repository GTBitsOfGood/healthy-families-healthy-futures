import React from 'react';

import { Box, Heading, Text, Stack, Center, Grid, useBreakpointValue } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'src/components/SectionHeader';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.DonationDetailFragment;
}

function DonationDetailSection({ data }: Props): JSX.Element {
  const { findLocale } = useLocale();
  const section = findLocale(data.allContentfulDonationDetailSection.nodes);
  const variant = useBreakpointValue({ base: 'reverse', md: 'inorder' });

  return (
    <Box bg="white" mb="117px">
      <SectionHeader text="Where do donations go" textPosition="left" />
      <Grid bg="charcoal" templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
        {variant == 'inorder' && section?.image?.fluid != null && (
          <Img
            fluid={section?.image.fluid}
            alt={section?.image.description}
            style={{ height: '100%' }}
          />
        )}
        <Center>
          <Stack spacing={5} px={{ base: 10, md: 20, lg: '20%' }} py={10} direction="column">
            <Heading
              textAlign={{ base: 'left', md: 'center' }}
              m="auto"
              mb={10}
              textStyle="heading1"
              color="white"
            >
              {section?.title}
            </Heading>
            <Box>
              <Text textAlign={{ base: 'left', md: 'center' }} textStyle="body1" color="white">
                {section?.description?.childMarkdownRemark?.rawMarkdownBody}
              </Text>
            </Box>
          </Stack>
        </Center>
        {variant == 'reverse' && section?.image?.fluid != null && (
          <Img
            fluid={section?.image.fluid}
            alt={section?.image.description}
            style={{ height: '100%' }}
          />
        )}
      </Grid>
    </Box>
  );
}

export default DonationDetailSection;

export const fragment = graphql`
  fragment DonationDetail on Query {
    allContentfulDonationDetailSection {
      nodes {
        title
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
        node_locale
      }
    }
  }
`;
