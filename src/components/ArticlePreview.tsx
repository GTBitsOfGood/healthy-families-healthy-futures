import React from 'react';

import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from '../css/ArticlePreview.module.css';

interface Props {
  data: GatsbyTypes.ArticlePreviewFragment;
}

function ArticlePreview({ data }: Props): JSX.Element {
  return (
    <div>
      {data.heroImage?.fluid == null ? (
        <p>Image not found</p>
      ) : (
        <Img alt="" fluid={data.heroImage?.fluid} />
      )}

      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${data.slug ?? ''}`}>{data.title}</Link>
      </h3>
      <small>{data.publishDate}</small>

      {data.description?.childMarkdownRemark?.html == null ? (
        <div>Content missing!</div>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: data.description?.childMarkdownRemark?.html,
          }}
        />
      )}

      {data.tags &&
        data.tags.map(tag => (
          <p className={styles.tag} key={tag}>
            {tag}
          </p>
        ))}
    </div>
  );
}

export default ArticlePreview;

export const fragment = graphql`
  fragment ArticlePreview on ContentfulBlogPost {
    title
    slug
    publishDate(formatString: "MMMM Do, YYYY")
    tags
    heroImage {
      fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
        ...GatsbyContentfulFluid
      }
    }
    description {
      childMarkdownRemark {
        html
      }
    }
  }
`;
