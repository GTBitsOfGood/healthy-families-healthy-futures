import React from 'react';

import { graphql, PageProps } from 'gatsby';
import BasicBanner from 'src/components/BasicBanner';
import Layout from 'src/components/Layout';
import DonateSection from 'src/sections/DonateBanner';
import InvolvmentSection from 'src/sections/InvolvementSection';
import NewsletterSection from 'src/sections/NewsletterBanner';

interface Props extends PageProps {
  data: GatsbyTypes.GetInvolvedPageQuery;
}

const GetInvolvedPage = (props: Props) => {
  return (
    <Layout location={props.location}>
      <BasicBanner title="Get Involved" />
      <InvolvmentSection data={props.data} />
      <DonateSection data={props.data} />
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
    ...DonateBanner
    ...InvolvmentSection
  }
`;
