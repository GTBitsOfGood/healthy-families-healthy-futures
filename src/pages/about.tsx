import React from 'react';

import { graphql, PageProps } from 'gatsby';
import Layout from 'src/components/Layout';
import AboutBanner from 'src/sections/AboutBanner';
import DonateSection from 'src/sections/DonateBanner';
import NewsletterSection from 'src/sections/NewsletterBanner';
import OurFounderSection from 'src/sections/OurFounderSection';
import OurSponsorSection from 'src/sections/OurSponsorSection';
import OurStorySection from 'src/sections/OurStorySection';
import OurWorkSection from 'src/sections/OurWorkSection';

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
