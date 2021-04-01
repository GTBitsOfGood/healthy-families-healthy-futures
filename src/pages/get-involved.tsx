import React from 'react';

import { graphql, PageProps } from 'gatsby';
import BasicBanner from 'src/components/BasicBanner';
import Layout from 'src/components/Layout';
import DonateSection from 'src/sections/DonateBanner';
import DonationDetailSection from 'src/sections/DonationDetailSection';
import InvolvmentSection from 'src/sections/InvolvementSection';
import NewsletterSection from 'src/sections/NewsletterBanner';

interface Props extends PageProps {
  data: GatsbyTypes.GetInvolvedPageQuery;
}

const GetInvolvedPage = (props: Props) => {
  const { data, location } = props;

  return (
    <Layout location={location}>
      <BasicBanner title="Get Involved" />
      <InvolvmentSection data={data} />
      <DonationDetailSection data={data} />
      <DonateSection data={data} />
      <NewsletterSection />
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
    ...DonationDetail
    ...DonateBanner
    ...InvolvmentSection
  }
`;
