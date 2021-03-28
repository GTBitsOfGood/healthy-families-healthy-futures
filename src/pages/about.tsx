import React from 'react';

import { Box, Text, HStack, Image, Grid } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import AboutBanner from 'src/components/AboutBanner';
import DonateSection from 'src/components/DonateSection';
import OurFounderSection from 'src/components/OurFounderSection';
import OurStorySection from 'src/components/OurStorySection';
import OurWorkSection from 'src/components/OurWorkSection';

import Layout from '../components/Layout';
import NewsletterSection from '../components/NewsletterSection';

interface Props extends PageProps {
  data: GatsbyTypes.AboutQueryQuery;
}

function AboutPage(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <AboutBanner data={props.data} />

      <OurStorySection data={props.data} />

      <OurWorkSection data={props.data} />

      <OurFounderSection data={props.data} />

      <HStack marginBottom={170} spacing={0}>
        <Box w={884} bg="gray.light" p={1}>
          <Text textAlign={'center'} textStyle="heading1">
            OUR SPONSERS AND PARTNERS
          </Text>
        </Box>
        <Box bg="creamsicle" w="80%" p={8}></Box>
      </HStack>

      <Grid
        marginBottom={277}
        marginLeft="20%"
        marginRight="20%"
        templateColumns="repeat(5, 1fr)"
        gap={20}
      >
        {/* for (i = 0; i < sponsors.length; i++) {

        } */}
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
        <Image borderRadius="full" boxSize="100px" src="download.png" alt="Sponsor" />
      </Grid>

      <DonateSection />
      <NewsletterSection />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    ...AboutBanner
    ...OurWorkSection
    ...OurStorySection
    ...OurFounderSection
  }
`;
