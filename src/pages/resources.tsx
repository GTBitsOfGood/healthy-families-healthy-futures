import React from 'react';

import { graphql, PageProps } from 'gatsby';
import BasicBanner from 'src/components/BasicBanner';
import Layout from 'src/components/Layout';
import { useLocale } from 'src/contexts/LocaleContext';
import DonateBanner from 'src/sections/DonateBanner';
import LinkDocSection from 'src/sections/LinkDocSection';
import MediaGallerySection from 'src/sections/MediaGallerySection';
import NewsletterBanner from 'src/sections/NewsletterBanner';

interface Props extends PageProps {
  data: GatsbyTypes.ResourcesPageQuery;
}

function ResourcesPage({ data }: Props): JSX.Element {
  const { findLocale } = useLocale();

  const header = findLocale(data.allContentfulHeaderSection.nodes);

  return (
    <Layout data={data}>
      <BasicBanner data={header} />
      <LinkDocSection data={data} />
      <MediaGallerySection data={data} />
      <DonateBanner data={data} />
      <NewsletterBanner data={data} />
    </Layout>
  );
}

export default ResourcesPage;

export const pageQuery = graphql`
  query ResourcesPage {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulHeaderSection(filter: { key: { eq: "resources" } }) {
      nodes {
        ...BasicBanner
        node_locale
      }
    }
    ...Layout
    ...LinkDoc
    ...MediaGallery
    ...DonateBanner
    ...NewsletterBanner
  }
`;
