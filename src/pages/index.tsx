import React from 'react';

import { Box, Container, Divider, Heading, Text, Button, HStack} from '@chakra-ui/react';
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
      <Box margin={{ base: 10, md: 220 }}>
      <Heading textStyle="heading1" color = "tangerine.500">Promoting Healthy Futures,</Heading>
      <Heading textStyle="heading1" color = "tangerine.500">One Meal At a Time</Heading>
      <Heading textStyle="subheading1">Healthy Families - Healthy futures is dedicated to empowering teachers,</Heading>
      <Heading textStyle="subheading1">school staff, and families of young children to embrace healthy eating habits</Heading>
      <Heading textStyle="subheading1">by equipping them with the tools and educated support system they need to</Heading>
      <Heading textStyle="subheading1">make healthy food choices.</Heading>
      <Box marginTop = {31}>
      <Button variant="neutral" fontSize="16px">
          Learn More
        </Button>
        </Box>
      </Box>


      <HStack align="center" spacing={10}>
        <Text textStyle="heading2">OUR WORK</Text>
        <Divider borderColor="tangerine.500" />
      </HStack>



     
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
