import React from 'react';

import { graphql } from 'gatsby';

interface Props {
  data: GatsbyTypes.BlogsBannerFragment;
}

function BlogsBanner({ data }: Props): JSX.Element {
  const featuredBlog = data?.contentfulBlogPost;

  return <p>Blogs Banner</p>;
}

export default BlogsBanner;

export const fragment = graphql`
  fragment BlogsBanner on Query {
    contentfulBlogPost(featured: { eq: true }) {
      title
      heroImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`;
