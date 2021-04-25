import React from 'react';

import { graphql, PageProps } from 'gatsby';
import Layout from 'src/components/Layout';
import BlogListSection from 'src/sections/BlogListSection';
import BlogsBanner from 'src/sections/BlogsBanner';
import DonateBanner from 'src/sections/DonateBanner';
import NewsletterBanner from 'src/sections/NewsletterBanner';

interface Props extends PageProps {
  data: GatsbyTypes.BlogIndexQuery;
}

function BlogIndex({ data }: Props): JSX.Element {
  return (
    <Layout data={data} pageName="Blog">
      <BlogsBanner data={data} />
      <BlogListSection data={data} />
      <DonateBanner data={data} />
      <NewsletterBanner data={data} />
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
    ...Layout
    ...BlogsBanner
    ...BlogList
    ...DonateBanner
    ...NewsletterBanner
  }
`;
