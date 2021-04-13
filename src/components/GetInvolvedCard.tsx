import React from 'react';

import { Box, Text, Flex } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.GetInvolvedCardFragment;
}

const GetInvolvedCard = ({ data }: Props) => {
  const { title, icon, link, description } = data;

  const imageEl =
    icon?.fluid != null ? (
      <Img
        style={{ marginTop: '50%', transform: 'translateY(-70%)' }}
        fluid={icon.fluid}
        imgStyle={{ objectFit: 'contain' }}
      />
    ) : null;

  return (
    <Link to={link ?? '#'}>
      <Flex direction="column" align="center" w={{ base: '30vw', md: 'auto' }} my="auto">
        <Box w={{ base: 150, md: 312 }} h={{ base: 100, md: 246 }} mb={{ base: 30, md: 0 }}>
          {imageEl}
        </Box>
        <Text color="charcoal" textTransform="uppercase" textStyle="heading2">
          {title}
        </Text>
        <Text color="charcoal" textStyle="heading3">
          {description}
        </Text>
      </Flex>
    </Link>
  );
};

export default GetInvolvedCard;

export const fragment = graphql`
  fragment GetInvolvedCard on ContentfulGetInvolvedCard {
    title
    link
    icon {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
    }
    node_locale
    description
  }
`;
