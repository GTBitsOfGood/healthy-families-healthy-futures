import React from 'react';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { graphql, Link, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';

import Layout from '../../components/Layout';
import RichText from '../../components/RichText';

interface Props extends PageProps {
  data: GatsbyTypes.BlogPostPageQuery;
}

function BlogPostTemplate(props: Props): JSX.Element {
  const { locale, findLocale } = useLocale();

  const post = findLocale(props.data.allContentfulBlogPost.nodes);

  const dateObj = parseISO(post?.publishDate ?? '');

  const date =
    locale === 'en-US'
      ? format(dateObj, 'MM/dd/yyyy')
      : format(dateObj, 'dd/MM/yyyy', { locale: es });

  return (
    <Layout data={props.data}>
      <Container maxW="740px" px={0} pt="50px">
        <Link to="/blog">
          <Button
            display={{ base: 'none', md: 'flex' }}
            variant="back"
            leftIcon={<ChevronLeftIcon />}
            mb="50px"
          >
            Back to Recipes
          </Button>
        </Link>

        <Box mb="30px">
          <Heading textStyle="heading1">{post?.title}</Heading>
          <Text textStyle="body1" fontWeight={800}>
            {post?.author?.name}
          </Text>
          <Text mt="6px">{date}</Text>
        </Box>

        <Heading textStyle="heading3" fontSize={{ base: 16, md: 22 }} mb="50px">
          {post?.description?.childMarkdownRemark?.rawMarkdownBody}
        </Heading>

        {post?.heroImage?.fluid != null && <Img fluid={post.heroImage.fluid} />}
        {post?.heroCaption != null && (
          <Text textStyle="caption" w="full" textAlign="center" mt="32px">
            {post.heroCaption}
          </Text>
        )}
        <Box mt="32px">
          <RichText data={post?.body2?.raw} />
        </Box>
      </Container>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostPage($slug: String!) {
    ...Layout
    allContentfulBlogPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        publishDate
        heroImage {
          fluid(maxWidth: 1180) {
            ...GatsbyContentfulFluid
          }
        }
        heroCaption
        author {
          name
        }
        description {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        body {
          childMarkdownRemark {
            html
          }
        }
        body2 {
          raw
        }
        node_locale
      }
    }
  }
`;
