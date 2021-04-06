import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.OurWorkCardFragment;
}

const OurWorkCard = ({ data }: Props) => {
  const { title, ctaText, ctaLink, description, image } = data;

  const bodyText = description?.childMarkdownRemark?.rawMarkdownBody ?? '';

  const imageEl =
    image?.fluid != null ? (
      <Img fluid={image.fluid} alt={image.description} imgStyle={{ objectFit: 'contain' }} />
    ) : null;

  return (
    <Box
      boxShadow="card"
      w={{ base: '75vw', md: 499 }}
      mx={{ base: 'auto' }}
      my={10}
      h={{ md: 468 }}
      bg="white"
      pb={{ base: 5, md: 0 }}
    >
      <Flex direction="column" align="center">
        <Box w={{ base: 170, md: 312 }} h={{ base: 'auto', md: 246 }}>
          {imageEl}
        </Box>
        <Text color="charcoal" textTransform="uppercase" textStyle="heading2">
          {title}
        </Text>
        <Box w={{ base: '65vw', md: 365 }} mt={4}>
          <Text textAlign={'center'} textStyle="subheading1">
            {bodyText}
          </Text>
        </Box>
      </Flex>
      <Box mt={33} ml={{ base: 120, md: 298 }}>
        <Link to={ctaLink ?? '#'}>
          <Button rightIcon={<ArrowForwardIcon />} variant="secondary">
            {ctaText}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default OurWorkCard;

export const fragment = graphql`
  fragment OurWorkCard on ContentfulOurWorkCard {
    displayIndex
    title
    ctaLink
    ctaText
    description {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
    image {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
      description
    }
  }
`;
