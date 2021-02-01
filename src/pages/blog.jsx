import React from 'react';
import { Link, graphql } from 'gatsby';
import { get } from 'lodash';
import { Helmet } from 'react-helmet';
import styles from './blog.module.css';
import Layout from '../components/layout';
import ArticlePreview from '../components/ArticlePreview';

function BlogIndex(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = props.data?.allContentfulBlogPost?.edges;

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
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
      }
    }
  }
`;
