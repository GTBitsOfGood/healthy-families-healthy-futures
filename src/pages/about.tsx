import React from 'react';

import { graphql, PageProps } from 'gatsby';
import AboutBanner from 'src/components/AboutBanner';
import DonateSection from 'src/components/DonateSection';
import OurFounderSection from 'src/components/OurFounderSection';
import OurSponsorSection from 'src/components/OurSponsorSection';
import OurStorySection from 'src/components/OurStorySection';
import OurWorkSection from 'src/components/OurWorkSection';

import Layout from '../components/Layout';
import NewsletterSection from '../components/NewsletterSection';

interface Props extends PageProps {
  data: GatsbyTypes.AboutQueryQuery;
}

function AboutPage(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <AboutBanner data={props.data} />

      <OurStorySection data={props.data} />

      <OurWorkSection data={props.data} />

      <OurFounderSection data={props.data} />

      <OurSponsorSection data={props.data} />

      <DonateSection />
      <NewsletterSection />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    ...AboutBanner
    ...OurWorkSection
    ...OurStorySection
    ...OurFounderSection
    ...OurSponsorSection
  }
`;
