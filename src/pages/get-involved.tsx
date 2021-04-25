import React from 'react';

import { graphql, PageProps } from 'gatsby';
import BasicBanner from 'src/components/BasicBanner';
import Layout from 'src/components/Layout';
import { useLocale } from 'src/contexts/LocaleContext';
import DonateSection from 'src/sections/DonateBanner';
import GetInvolvedSection from 'src/sections/GetInvolvedSection';
import NewsletterBanner from 'src/sections/NewsletterBanner';

interface Props extends PageProps {
  data: GatsbyTypes.GetInvolvedPageQuery;
}

const GetInvolvedPage = ({ data }: Props) => {
  const { findLocale } = useLocale();

  const header = findLocale(data.allContentfulHeaderSection.nodes);

  return (
    <Layout data={data} pageName="Get Involved">
      <BasicBanner data={header} />
      <GetInvolvedSection data={data} />
      <DonateSection data={data} />
      <NewsletterBanner data={data} />
    </Layout>
  );
};

export default GetInvolvedPage;

export const pageQuery = graphql`
  query GetInvolvedPage {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulHeaderSection(filter: { key: { eq: "get-involved" } }) {
      nodes {
        ...BasicBanner
        node_locale
      }
    }
    ...Layout
    ...DonateBanner
    ...GetInvolvedSection
    ...NewsletterBanner
  }
`;
