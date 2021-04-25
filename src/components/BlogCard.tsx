import React from 'react';

import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, LinkBox, LinkOverlay, Text, VStack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/react';
import { parseISO } from 'date-fns';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useLocale } from 'src/contexts/LocaleContext';

interface Props {
  data: GatsbyTypes.BlogCardFragment;
  altLayout?: boolean;
}

function BlogCard({ data, altLayout }: Props): JSX.Element {
  const { formatLocale } = useLocale();
  const slug = data.slug;

  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;

  const title = <Heading textStyle="heading2">{data.title}</Heading>;
  const date =
    data.publishDate != null ? (
      <Text textStyle="body1" fontWeight={500}>
        {formatLocale(parseISO(data.publishDate), 'M/dd/yy')}
      </Text>
    ) : null;
  const description = (
    <Text textStyle="body2" fontWeight={500}>
      {data.description?.description}
    </Text>
  );
  const author =
    data.author?.name != null ? (
      <Text textStyle="body1" fontWeight="bold">
        {data.author?.name}
      </Text>
    ) : null;
  const image = (
    <Box w="full" h={{ base: '150px', md: '441px' }}>
      {data.heroImage?.fluid ? (
        <Img fluid={data.heroImage.fluid} style={{ height: '100%', width: '100%' }} />
      ) : (
        <Box w="full" h="full" bg="lightgray" />
      )}
    </Box>
  );
  const cta = (
    <Flex w="full" justifyContent="flex-end">
      <Link to={`/blog/${slug ?? ''}`}>
        <Button textStyle="body1" variant="secondary" rightIcon={<ArrowForwardIcon />} px={0}>
          READ MORE
        </Button>
      </Link>
    </Flex>
  );

  return (
    <LinkBox>
      <VStack w={{ base: '150px', md: '583px' }} spacing="10px" alignItems="start">
        {altLayout == null && !isMobile ? (
          <>
            {title}
            <LinkOverlay w="full" to={`/blog/${slug ?? ''}`} as={Link}>
              {image}
            </LinkOverlay>
            {date}
            {description}
          </>
        ) : (
          <>
            <LinkOverlay w="full" to={`/blog/${slug ?? ''}`} as={Link}>
              {image}
            </LinkOverlay>
            {title}
            {description}
            {author}
            {date}
          </>
        )}
        {cta}
      </VStack>
    </LinkBox>
  );
}

export default BlogCard;

export const fragment = graphql`
  fragment BlogCard on ContentfulBlogPost {
    title
    heroImage {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
    }
    publishDate
    description {
      description
    }
    author {
      name
    }
    slug
  }
`;
