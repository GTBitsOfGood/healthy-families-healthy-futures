import React from 'react';

import { graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import AboutBanner from '../sections/AboutBanner';
import DonateSection from '../sections/DonateBanner';
import NewsletterSection from '../sections/NewsletterBanner';
import OurFounderSection from '../sections/OurFounderSection';
import OurSponsorSection from '../sections/OurSponsorSection';
import OurStorySection from '../sections/OurStorySection';
import OurWorkSection from '../sections/OurWorkSection';

interface Props extends PageProps {
  data: GatsbyTypes.AboutPageQuery;
}

function AboutPage(props: Props): JSX.Element {
  return (
    <Layout location={props.location}>
      <AboutBanner data={props.data} />

      <OurStorySection data={props.data} />

      <OurWorkSection data={props.data} />

      <OurFounderSection data={props.data} />

      <OurSponsorSection data={props.data} />

      <DonateSection data={props.data} />
      <NewsletterSection />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage {
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
    ...DonateBanner
  }
`;
