import React from 'react';

import { graphql, PageProps } from 'gatsby';
import Layout from 'src/components/Layout';
import AboutBanner from 'src/sections/AboutBanner';
import DonateSection from 'src/sections/DonateBanner';
import NewsletterBanner from 'src/sections/NewsletterBanner';
import OurFounderSection from 'src/sections/OurFounderSection';
import OurSponsorSection from 'src/sections/OurSponsorSection';
import OurStorySection from 'src/sections/OurStorySection';
import OurWorkSection from 'src/sections/OurWorkSection';

interface Props extends PageProps {
  data: GatsbyTypes.AboutPageQuery;
}

function AboutPage({ data }: Props): JSX.Element {
  return (
    <Layout data={data}>
      <AboutBanner data={data} />

      <OurStorySection data={data} />

      <OurWorkSection data={data} />

      <OurFounderSection data={data} />

      <OurSponsorSection data={data} />

      <DonateSection data={data} />
      <NewsletterBanner data={data} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage {
    ...Layout
    ...AboutBanner
    ...OurWorkSection
    ...OurStorySection
    ...OurFounderSection
    ...OurSponsorSection
    ...DonateBanner
    ...NewsletterBanner
  }
`;
