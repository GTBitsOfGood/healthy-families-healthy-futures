import React from 'react';

import { Box, Container, Divider, Heading, Text, Button, HStack, VStack, Image, Stack, Input, Center} from '@chakra-ui/react';
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
  const [value, setValue] = React.useState("")

  // const siteTitle = props.data.site?.siteMetadata?.title;
  // const posts = props.data.allContentfulBlogPost.edges;
  // const [author] = props.data.allContentfulPerson.nodes;

  return (
    <Layout location={props.location}>
      <Box w = {560} marginTop = {240} marginLeft = {180}>
      <Heading textStyle="heading1" color = "tangerine.500">Promoting Healthy Futures,</Heading>
      <Heading textStyle="heading1" color = "tangerine.500">One Meal At a Time</Heading>
      <Heading fontWeight = "light" textStyle="subheading1" fontSize = "16px">Healthy Families - Healthy futures is dedicated to empowering teachers, school staff, and families of young children to embrace healthy eating habits by equipping them with the tools and educated support system they need to make healthy food choices.</Heading>
      <Box marginTop = {31} marginBottom = {300}>
      <Button variant="neutral" fontSize="16px">
          Learn More
        </Button>
        </Box>
      </Box>

      <Box h = {900} bg = "gray.light">
      <HStack marginBottom = {170}>
        <Box w = {500}>
        <Text textAlign = {'center'} textStyle="heading1">OUR WORK</Text> 
        </Box>
        <Box bg = "tangerine.500" w = "100%" p = {8}></Box>
      </HStack>

      <HStack marginLeft = "10%" marginRight = "10%">
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

     <HStack>
      <Box w = "40%" h = {480}>
      <img src = "Chef.png"></img>
      </Box>
      <Box w = "60%" h = {480} bg = "tangerine.500">
      <Box h = {155} bg = "tangerine.500"></Box>
        <Stack direction = "row">
        <Box marginLeft = {170} w = {183} h = {158}>
        <img src = "square-logo.png"></img>
        </Box>
        <Stack direction = "column">
        <Box w = {320} marginLeft = {55}>
        <Heading textAlign = "left" textStyle="heading1" color = "charcoal">Help Us Grow</Heading>
        <Text textAlign = "left" textStyle="body1">Even small contributions can help us continue our work to provide nutritional education</Text>
        <Box marginTop = {5}>
        <Button align = "left" variant="primary" fontSize="16px">
          DONATE
        </Button>
        </Box>
        </Box>
        </Stack> 
        </Stack>
      </Box>
      </HStack>
    


      <Box h = {75} bg = "gray.light"></Box>
      <Box h = {200} bg = "gray.light">
        <Text color = "charcoal" textAlign = {'center'} textStyle="heading2">Sign up for our newsletter!</Text>
        <Stack direction = "row" marginLeft = "40%" marginTop = {30}>
          <Center>
          <Input 
             borderColor = "black"
             borderRadius = "none"
             marginRight = {3}
             value = {value}
           />
          <Button  variant="neutral" fontSize="16px">
          Subscribe
        </Button>
        </Center>
        </Stack>

      </Box>

  
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

/** 
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
*/