import React from 'react';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { graphql, Link, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import BlogCard from 'src/components/BlogCard';
import { EmailIcon, FacebookIcon, LinkedInIcon } from 'src/components/Icons';
import { useLocale } from 'src/contexts/LocaleContext';

import Layout from '../../components/Layout';
import RichText from '../../components/RichText';

interface Props extends PageProps {
  data: GatsbyTypes.BlogPostPageQuery;
}

function BlogPostTemplate(props: Props): JSX.Element {
  const { locale, findLocale, filterLocale } = useLocale();

  const post = findLocale(props.data.allContentfulBlogPost.nodes);
  const allPosts = filterLocale(props.data.relatedPosts.nodes);
  const currPostIdx = allPosts.findIndex(post => post.publishDate === post.publishDate);
  const relatedPosts = allPosts.slice(currPostIdx, currPostIdx + 2);
  let i = 0;
  while (relatedPosts.length < 2) {
    relatedPosts.push(allPosts[i++]);
  }

  if (post == null) {
    return (
      <Layout data={props.data}>
        <Text>Missing Post</Text>
      </Layout>
    );
  }

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
          <RichText data={post} />
        </Box>

        <Center w="full" mt="80px">
          <VStack spacing="24px">
            <Text textStyle="body1" fontWeight="bold">
              Share this blog post!
            </Text>
            <HStack spacing="20px">
              <ChakraLink
                href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  props.location.href,
                )}`}
                isExternal
              >
                <FacebookIcon fill="creamsicle" boxSize="32px" />
              </ChakraLink>
              <ChakraLink
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  props.location.href,
                )}`}
                isExternal
              >
                <LinkedInIcon fill="creamsicle" boxSize="32px" />
              </ChakraLink>
              <ChakraLink
                href={`mailto:?body=Here's%20an%20article%20from%20Healthy%20Families%20Healthy%20Futures%3A${encodeURIComponent(
                  props.location.href,
                )}`}
                isExternal
              >
                <EmailIcon fill="creamsicle" boxSize="32px" />
              </ChakraLink>
            </HStack>
          </VStack>
        </Center>
      </Container>
      <VStack mt="135px" spacing="90px" mb="150px">
        <Heading textStyle="heading2">Check out these other posts</Heading>
        <Flex justifyContent="space-evenly" w="full">
          {relatedPosts.map(post => (
            <BlogCard altLayout key={post.slug} data={post} />
          ))}
        </Flex>
      </VStack>
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
        ...BlogBody
        node_locale
      }
    }
    relatedPosts: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        ...BlogCard
        node_locale
      }
    }
  }
`;
