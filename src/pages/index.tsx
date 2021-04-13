import React from 'react';

import { graphql, PageProps } from 'gatsby';
import Layout from 'src/components/Layout';
import DonateBanner from 'src/sections/DonateBanner';
import FeaturedRecipesSection from 'src/sections/FeaturedRecipesSection';
import HomeBanner from 'src/sections/HomeBanner';
import NewsletterBanner from 'src/sections/NewsletterBanner';
import OurWorkSection from 'src/sections/OurWorkSection';

interface Props extends PageProps {
  data: GatsbyTypes.HomePageQuery;
}

function RootIndex(props: Props): JSX.Element {
  return (
    <Layout data={props.data}>
      <HomeBanner data={props.data} />

      <OurWorkSection data={props.data} />
      <FeaturedRecipesSection data={props.data} />
      <DonateBanner data={props.data} />

      <NewsletterBanner data={props.data} />
    </Layout>
  );
}

export default RootIndex;

export const pageQuery = graphql`
  query HomePage {
    ...Layout
    ...HomeBanner
    ...FeaturedRecipesSection
    ...OurWorkSection
    ...DonateBanner
    ...NewsletterBanner
  }
`;
