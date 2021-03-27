import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Button, HStack, Center, GridItem, Grid, Link } from '@chakra-ui/react';
import slugify from '@sindresorhus/slugify';
import { graphql, PageProps } from 'gatsby';
import DonateSection from 'src/components/DonateSection';
import Featured from 'src/components/Featured';
import OurWork from 'src/components/OurWork';

import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';

interface Props extends PageProps {
  data: GatsbyTypes.HomeQueryQuery;
}

function RootIndex(props: Props): JSX.Element {
  const recipes = props.data?.allContentfulRecipe?.nodes;
  // console.log(recipes);

  return (
    <Layout location={props.location}>
      <Box w={560} marginTop={240} marginLeft={180}>
        <Heading textStyle="heading1" color="creamsicle">
          Promoting Healthy Futures,
        </Heading>
        <Heading textStyle="heading1" color="creamsicle">
          One Meal At a Time
        </Heading>
        <Heading fontWeight="light" textStyle="subheading1" fontSize="16px">
          Healthy Families - Healthy futures is dedicated to empowering teachers, school staff, and
          families of young children to embrace healthy eating habits by equipping them with the
          tools and educated support system they need to make healthy food choices.
        </Heading>
        <Box marginTop={31} marginBottom={300}>
          <Button variant="neutral" fontSize="16px">
            Learn More
          </Button>
        </Box>
      </Box>

      <OurWork />

      <HStack marginBottom={170}>
        <Box bg="creamsicle" w="100%" p={8}></Box>
        <Box w={640}>
          <Text textAlign={'center'} textStyle="heading1">
            FEATURED RECIPES
          </Text>
        </Box>
      </HStack>

      <HStack marginLeft="10%" marginRight="10%">
        <Center>
          <GridItem>
            <Grid
              templateColumns={{ base: 'repeat(2, 183px)', md: 'repeat(3, 400px)' }}
              justifyItems="center"
              justifyContent="space-evenly"
              rowGap="35px"
            >
              {recipes.map(node => {
                return (
                  <GridItem key={node.id}>
                    <Link to={`/recipes/${slugify(String(node.title)) ?? ''}`}>
                      <Featured data={node} />
                    </Link>
                  </GridItem>
                );
              })}
            </Grid>
          </GridItem>
        </Center>
      </HStack>
      <Box marginTop={82} marginLeft="78%" marginBottom={155}>
        <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
          VIEW ALL RECIPES
        </Button>
      </Box>

      <DonateSection />

      <Newsletter />
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
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        ...RecipeCard
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

// const siteTitle = props.data.site?.siteMetadata?.title;
// const posts = props.data.allContentfulBlogPost.edges;
// const [author] = props.data.allContentfulPerson.nodes;

{
  /* <Box>
            <Text textAlign={'left'} textStyle="subheading1">
              Food Title 1
            </Text>
            <Box w={312} h={246}>
              <img src="download.png" alt=""></img>
            </Box>
            <Text textAlign={'left'} textStyle="body2">
              Food Desciription 1
            </Text>
            <Box marginTop={33} marginLeft={220}>
              <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
                MORE
              </Button>
            </Box>
          </Box>

          <Box marginLeft={20}>
            <Text textAlign={'left'} textStyle="subheading1">
              Food Title 2
            </Text>
            <Box w={312} h={246}>
              <img src="download.png" alt=""></img>
            </Box>
            <Text textAlign={'left'} textStyle="body2">
              Food Desciription 2
            </Text>
            <Box marginTop={33} marginLeft={220}>
              <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
                MORE
              </Button>
            </Box>
          </Box>

          <Box marginLeft={20}>
            <Text textAlign={'left'} textStyle="subheading1">
              Food Title 3
            </Text>
            <Box w={312} h={246}>
              <img src="download.png" alt=""></img>
            </Box>
            <Text textAlign={'left'} textStyle="body2">
              Food Desciription 3
            </Text>
            <Box marginTop={33} marginLeft={220}>
              <Button rightIcon={<ArrowForwardIcon />} variant="secondary" fontSize="16px">
                MORE
              </Button>
            </Box>
          </Box> */
}
