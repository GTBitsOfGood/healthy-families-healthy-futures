import React from 'react';

import { Box, Container, Divider, Heading, Text, Button, HStack, VStack, Image, Stack} from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import ArticlePreview from '../components/ArticlePreview';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { ArrowForwardIcon } from '@chakra-ui/icons';

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
      <Heading fontWeight = "light" textStyle="subheading1" fontSize = "16px">Healthy Families - Healthy futures is dedicated to empowering teachers,</Heading>
      <Heading fontWeight = "light" textStyle="subheading1" fontSize = "16px">school staff, and families of young children to embrace healthy eating habits</Heading>
      <Heading fontWeight = "light" textStyle="subheading1" fontSize = "16px">by equipping them with the tools and educated support system they need to</Heading>
      <Heading fontWeight = "light" textStyle="subheading1" fontSize = "16px">make healthy food choices.</Heading>
      <Box marginTop = {31}>
      <Button variant="neutral" fontSize="16px">
          Learn More
        </Button>
        </Box>
      </Box>

      <Box h = {840} bg = "gray.light">
      <HStack marginBottom = {170}>
        <Box w = {500}>
        <Text textAlign = {'center'} textStyle="heading1">OUR WORK</Text> 
        </Box>
        <Box bg = "tangerine.500" w = "100%" p = {8}></Box>
      </HStack>

      <HStack marginLeft = {157} marginRight = {158}>
        <Box boxShadow = "lg" w = {499} h = {468} marginRight = {127} bg = "white"> 
        <VStack> 
          <Box w = {312} h = {246}>
          <img src = "Chef.png"></img>
          </Box>
          <Text fontWeight = "light" color = "charcoal" textAlign = {'center'} textStyle="heading2">CLASSES & EVENTS</Text>
          <Box w = {365}>
            <Text textAlign = {'center'} textStyle = "subheading1" fontSize = "18px">HF-HF provides classes and workshops to help promote healthy eating habits and activities, run by our volunteers.</Text>
          </Box>
        </VStack>
        <Box marginTop = {33} marginLeft = {298}>
          <Button rightIcon = {<ArrowForwardIcon />}variant="secondary" fontSize="16px">
          LEARN MORE
        </Button>
        </Box>
        </Box>
        <Box  boxShadow = "lg"  w = {499} h = {468} bg = "white"> 
        <VStack> 
        <Box w = {312} h = {246}>
         <img src = "Card_Image.png" ></img>
         </Box>
          <Text color = "charcoal" textAlign = {'center'} textStyle="heading2">NUTRITIONAL RESOURCES</Text>
          <Box w = {365}>
            <Text textAlign = {'center'} textStyle = "subheading1" fontSize = "18px">Aside from recipes, HF-HF provides assortment of useful links and resources to help promote healthy eating and activities.</Text>
          </Box>
          </VStack>
          <Box marginTop = {33} marginLeft = {298}>
          <Button rightIcon = {<ArrowForwardIcon />}variant="secondary" fontSize="16px">
          LEARN MORE
        </Button>
        </Box>
        </Box>

      </HStack>
      </Box>

  

      <HStack marginBottom = {170}>
        <Box bg = "tangerine.500" w = "100%" p = {8}></Box>
        <Box w = {640}>
        <Text textAlign = {'center'} textStyle="heading1">FEATURED RECIPES</Text> 
        </Box>
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
