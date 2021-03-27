import React from 'react';

import { Box, Heading, Button } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import DonateSection from 'src/components/DonateSection';
import FeaturedRecipesSection from 'src/components/FeaturedRecipesSection';
import OurWork from 'src/components/OurWork';

import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';

interface Props extends PageProps {
  data: GatsbyTypes.HomeQueryQuery;
}

function RootIndex(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <Box w={560} marginTop={240} marginLeft={180}>
        <Heading textStyle="heading1" color="creamsicle">
          Promoting Healthy Futures,
        </Heading>
        <Heading textStyle="heading1" color="creamsicle">
          One Meal At a Time
        </Heading>
        <Heading fontWeight="light" textStyle="subheading1" fontSize="16px">
          Healthy Families - Healthy futures is dedicated to empowering teachers, school staff, and
          families of young children to embrace healthy eating habits by equipping them with the
          tools and educated support system they need to make healthy food choices.
        </Heading>
        <Box marginTop={31} marginBottom={300}>
          <Button variant="neutral" fontSize="16px">
            Learn More
          </Button>
        </Box>
      </Box>

      <OurWork data={props.data} />
      <FeaturedRecipesSection data={props.data} />
      <DonateSection />

      <Newsletter />
    </Layout>
  );
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    ...FeaturedRecipesSection
    ...OurWorkSection
  }
`;
