import React from 'react';

import { Box, Heading, Text, Stack, Center, Grid } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'src/components/SectionHeader';

interface Props {
  data: GatsbyTypes.DonationDetailFragment;
}

function DonationDetailSection({ data }: Props): JSX.Element {
  const section = data.contentfulDonationDetailSection;

  return (
    <Box bg="gray.extralight">
      <SectionHeader text="Where do donations go" textPosition="left" />
      <Grid bg="charcoal" templateColumns={{ base: '1fr', lg: '1fr 1fr' }}>
        <Box h="800px" w="full">
          {section?.image?.fluid != null && (
            <Img
              fluid={section?.image.fluid}
              alt={section?.image.description}
              style={{ height: '100%' }}
            />
          )}
        </Box>
        <Center>
          <Stack spacing={5} px={{ base: 10, md: 20, lg: '20%' }} py={10} direction="column">
            <Heading textAlign="center" m="auto" mb={10} textStyle="heading1" color="white">
              {section?.title}
            </Heading>
            <Box>
              <Text textAlign="center" textStyle="body1" color="white">
                {section?.description?.childMarkdownRemark?.rawMarkdownBody}
              </Text>
            </Box>
          </Stack>
        </Center>
      </Grid>
    </Box>
  );
}

export default DonationDetailSection;

export const fragment = graphql`
  fragment DonationDetail on Query {
    contentfulDonationDetailSection {
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
    }
  }
`;
