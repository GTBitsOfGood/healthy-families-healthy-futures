import React from 'react';

import { graphql, PageProps } from 'gatsby';
import Layout from 'src/components/Layout';
import DonateBanner from 'src/sections/DonateBanner';
import EventsSection from 'src/sections/EventsSection';
import NewsletterBanner from 'src/sections/NewsletterBanner';

interface Props extends PageProps {
  data: GatsbyTypes.HomePageQuery;
}

function EventsPage(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <EventsSection />
      <DonateBanner data={props.data} />
      <NewsletterBanner />
    </Layout>
  );
}

export default EventsPage;

export const pageQuery = graphql`
  query EventsPage {
    site {
      siteMetadata {
        title
      }
    }
    ...DonateBanner
  }
`;
