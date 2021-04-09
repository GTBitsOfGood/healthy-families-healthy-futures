import React from 'react';

import { graphql, PageProps } from 'gatsby';
import BasicBanner from 'src/components/BasicBanner';
import Layout from 'src/components/Layout';
import DonateBanner from 'src/sections/DonateBanner';
import LinkDocSection from 'src/sections/LinkDocSection';
import MediaGallerySection from 'src/sections/MediaGallerySection';
import NewsletterBanner from 'src/sections/NewsletterBanner';

interface Props extends PageProps {
  data: GatsbyTypes.ResourcesPageQuery;
}

function ResourcesPage({ data, location }: Props): JSX.Element {
  return (
    <Layout location={location}>
      <BasicBanner title="Resources" />
      <LinkDocSection data={data} />
      <MediaGallerySection data={data} />
      <DonateBanner data={data} />
      <NewsletterBanner />
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
    ...LinkDoc
    ...MediaGallery
    ...DonateBanner
  }
`;
