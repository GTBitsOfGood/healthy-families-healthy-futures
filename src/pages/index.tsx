import React from 'react';

import { Box, Container, Divider, Heading } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import ArticlePreview from '../components/ArticlePreview';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

interface Props extends PageProps {
  data: GatsbyTypes.HomeQueryQuery;
}

function RootIndex(props: Props): JSX.Element {
  const siteTitle = props.data.site?.siteMetadata?.title;
  const posts = props.data.allContentfulBlogPost.edges;
  const [author] = props.data.allContentfulPerson.nodes;

  return (
    <Layout location={props.location}>
      <Container maxW="5xl" style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={author} />
        <Box py="10">
          <Heading as="h3">Recent articles</Heading>
          <Divider />
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview data={node} />
                </li>
              );
            })}
          </ul>
        </Box>
      </Container>
    </Layout>
  );
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          ...ArticlePreview
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      nodes {
        ...Hero
      }
    }
  }
`;
