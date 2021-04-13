import React from 'react';

import { graphql } from 'gatsby';

interface Props {
  data: GatsbyTypes.BlogCardFragment;
}

function BlogCard({ data }: Props): JSX.Element {
  const title = data.title;
  const heroImage = data.heroImage?.fluid;
  const publishDate = data.publishDate;
  const description = data.description?.childMarkdownRemark?.rawMarkdownBody;
  const slug = data.slug;

  return <p>Hello</p>;
}

export default BlogCard;

export const fragment = graphql`
  fragment BlogCard on ContentfulBlogPost {
    title
    heroImage {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
    }
    publishDate
    description {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
    slug
  }
`;
