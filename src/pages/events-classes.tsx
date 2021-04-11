import React from 'react';

import { graphql, PageProps } from 'gatsby';
import BasicBanner from 'src/components/BasicBanner';
import Layout from 'src/components/Layout';
import { useLocale } from 'src/contexts/LocaleContext';
import DonateBanner from 'src/sections/DonateBanner';
import EventCalendarSection from 'src/sections/EventCalendarSection';
import NewsletterBanner from 'src/sections/NewsletterBanner';
import UpcomingEventsSection from 'src/sections/UpcomingEventsSection';

interface Props extends PageProps {
  data: GatsbyTypes.EventsPageQuery;
}

function EventsPage(props: Props): JSX.Element {
  const { findLocale } = useLocale();

  const header = findLocale(props.data.allContentfulHeaderSection.nodes);

  return (
    <Layout location={props.location}>
      <BasicBanner data={header} />
      <EventCalendarSection />
      <UpcomingEventsSection />
      <DonateBanner data={props.data} />
      <NewsletterBanner data={props.data} />
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
    allContentfulHeaderSection(filter: { key: { eq: "events-classes" } }) {
      nodes {
        ...BasicBanner
        node_locale
      }
    }
    ...DonateBanner
    ...NewsletterBanner
  }
`;
