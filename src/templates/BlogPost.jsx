import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { get } from 'lodash';
import Img from 'gatsby-image';
import Layout from '../components/layout';

import heroStyles from '../css/Hero.module.css';
import RichText from '../components/RichText';

function BlogPostTemplate(props) {
  const post = get(props, 'data.contentfulBlogPost');
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  console.log(post);

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <Img className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.fluid} />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <RichText html={post.body.childMarkdownRemark.html} />
        </div>
      </div>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
