import React from 'react';

import { graphql, PageProps } from 'gatsby';
import Layout from 'src/components/Layout';
import DonateHeader from 'src/sections/DonateHeader';
import DonationDetailSection from 'src/sections/DonationDetailSection';
import NewsletterBanner from 'src/sections/NewsletterBanner';

interface Props extends PageProps {
  data: GatsbyTypes.DonatePageQuery;
}

const DonatePage = ({ data }: Props) => {
  return (
    <Layout data={data}>
      <DonateHeader data={data} />
      <DonationDetailSection data={data} />
      <NewsletterBanner data={data} />
    </Layout>
  );
};

export default DonatePage;

export const pageQuery = graphql`
  query DonatePage {
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
    ...DonateHeader
    ...DonationDetail
    ...NewsletterBanner
  }
`;
