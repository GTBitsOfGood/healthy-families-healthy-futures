import React from 'react';

import { graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import DonateBanner from '../sections/DonateBanner';
import FeaturedRecipesSection from '../sections/FeaturedRecipesSection';
import HomeBanner from '../sections/HomeBanner';
import NewsletterBanner from '../sections/NewsletterBanner';
import OurWorkSection from '../sections/OurWorkSection';

interface Props extends PageProps {
  data: GatsbyTypes.HomePageQuery;
}

function RootIndex(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <HomeBanner data={props.data} />

      <OurWorkSection data={props.data} />
      <FeaturedRecipesSection data={props.data} />
      <DonateBanner data={props.data} />

      <NewsletterBanner />
    </Layout>
  );
}

export default RootIndex;

export const pageQuery = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
      }
    }
    ...HomeBanner
    ...FeaturedRecipesSection
    ...OurWorkSection
    ...DonateBanner
  }
`;
