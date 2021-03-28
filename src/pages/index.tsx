import React from 'react';

import { graphql, PageProps } from 'gatsby';
import DonateSection from 'src/components/DonateSection';
import FeaturedRecipesSection from 'src/components/FeaturedRecipesSection';
import HomeBanner from 'src/components/HomeBanner';
import OurWorkSection from 'src/components/OurWorkSection';

import Layout from '../components/Layout';
import NewsletterSection from '../components/NewsletterSection';

interface Props extends PageProps {
  data: GatsbyTypes.HomeQueryQuery;
}

function RootIndex(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <HomeBanner data={props.data} />

      <OurWorkSection data={props.data} />
      <FeaturedRecipesSection data={props.data} />
      <DonateSection data={props.data} />

      <NewsletterSection />
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
    ...HomeBanner
    ...FeaturedRecipesSection
    ...OurWorkSection
    ...DonateSection
  }
`;
