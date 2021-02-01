import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from '../css/ArticlePreview.module.css';

interface Props {
  article: GatsbyTypes.ArticlePreviewFragment;
}

function ArticlePreview({ article }: Props): JSX.Element {
  return (
    <div>
      {article.heroImage?.fluid == null ? (
        <p>Image not found</p>
      ) : (
        <Img alt="" fluid={article.heroImage?.fluid} />
      )}

      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>

      {article.description?.childMarkdownRemark?.html == null ? (
        <div>Content missing!</div>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: article.description?.childMarkdownRemark?.html,
          }}
        />
      )}

      {article.tags &&
        article.tags.map(tag => (
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
