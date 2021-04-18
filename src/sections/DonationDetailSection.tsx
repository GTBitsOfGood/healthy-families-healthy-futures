import React from 'react';

import { Box, Heading, Text, Stack, Center, Grid } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import SectionHeader from 'src/components/SectionHeader';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.DonationDetailFragment;
}

function DonationDetailSection({ data }: Props): JSX.Element {
  const { findLocale } = useLocale();
  const section = findLocale(data.allContentfulDonationDetailSection.nodes);

  return (
    <Box bg="white" mb="117px">
      <Box mb={{ base: '25px', md: '80px' }}>
        <SectionHeader text="Where do donations go" textPosition="left" />
      </Box>
      <Grid bg="charcoal" templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
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
                {section?.description?.description}
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
    allContentfulDonationDetailSection {
      nodes {
        title
        description {
          description
        }
        node_locale
      }
    }
  }
`;
