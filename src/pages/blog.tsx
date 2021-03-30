import React from 'react';

import { Divider } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import ArticlePreview from 'src/components/ArticlePreview';
import Layout from 'src/components/Layout';
import styles from 'src/css/Blog.module.css';

interface Props extends PageProps {
  data: GatsbyTypes.BlogIndexQueryQuery;
}

function BlogIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title;
  const posts = props.data?.allContentfulBlogPost?.nodes;

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <Divider />
          <ul className="article-list">
            {posts.map(node => {
              return (
                <li key={node.slug}>
                  <ArticlePreview data={node} />
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
      nodes {
        ...ArticlePreview
      }
    }
  }
`;
