import React, { useEffect, useState } from 'react';

import { parseISO } from 'date-fns';
import { graphql, PageProps } from 'gatsby';
import BasicBanner from 'src/components/BasicBanner';
import Layout from 'src/components/Layout';
import { useLocale } from 'src/contexts/LocaleContext';
import DonateBanner from 'src/sections/DonateBanner';
import EventCalendarSection from 'src/sections/EventCalendarSection';
import NewsletterBanner from 'src/sections/NewsletterBanner';
import UpcomingEventsSection from 'src/sections/UpcomingEventsSection';
import { Event } from 'src/utils/types';

interface Props extends PageProps {
  data: GatsbyTypes.EventsPageQuery;
}

function EventsPage({ data }: Props): JSX.Element {
  const { findLocale, filterLocale } = useLocale();

  const header = findLocale(data.allContentfulHeaderSection.nodes);

  const [events, setEvents] = useState<Event[]>([]);

  const shouldShowFacebookEvents = data?.contentfulEventSourceConfig?.getFromFacebook ?? false;

  useEffect(() => {
    if (!shouldShowFacebookEvents) return;
    void (async () => {
      const res = await fetch(
        `https://graph.facebook.com/v10.0/232144604765679/events?access_token=${
          process.env.FB_PAGE_AUTH_TOKEN ?? ''
        }`,
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { unparsed } = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const parsed = unparsed.map(
        (e: unknown & { start_time: string; end_time: string; id: string }) => ({
          ...e,
          url: `https://www.facebook.com/events/${e.id}`,
          start_time: parseISO(e.start_time),
          end_time: parseISO(e.end_time),
        }),
      );
      setEvents(parsed);
    })();
  }, [shouldShowFacebookEvents]);

  useEffect(() => {
    if (shouldShowFacebookEvents) return;
    const unparsed = filterLocale(data.allContentfulEvent.nodes);
    const parsed: Event[] = unparsed.map(e => ({
      id: e.id,
      description: e.description ?? '',
      name: e.name ?? '',
      end_time: parseISO(e.end_time ?? ''),
      start_time: parseISO(e.start_time ?? ''),
      url: e.url ?? '',
      place: { name: e.place ?? '' },
      image: e.image?.fluid ?? undefined,
    }));
    setEvents(parsed);
  }, [data.allContentfulEvent.nodes, filterLocale, shouldShowFacebookEvents]);

  return (
    <Layout data={data} pageName="Events &amp; Classes">
      <BasicBanner data={header} />
      <EventCalendarSection events={events} />
      <UpcomingEventsSection events={events} />
      <DonateBanner data={data} />
      <NewsletterBanner data={data} />
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
    contentfulEventSourceConfig {
      getFromFacebook
    }
    allContentfulEvent {
      nodes {
        node_locale
        id: contentful_id
        name
        description
        place
        start_time: startTime
        end_time: endTime
        url: link
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    ...Layout
    ...DonateBanner
    ...NewsletterBanner
  }
`;
