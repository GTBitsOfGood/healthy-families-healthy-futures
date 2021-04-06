import React from 'react';

import { Box, Text, Flex } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: GatsbyTypes.GetInvolvedCardFragment;
}

const GetInvolvedCard = ({ data }: Props) => {
  const { title, icon, link } = data;

  const imageEl =
    icon?.fluid != null ? <Img fluid={icon.fluid} imgStyle={{ objectFit: 'contain' }} /> : null;

  return (
    <Link to={link ?? '#'}>
      <Box w="auto" my={10}>
        <Flex direction="column" align="center">
          <Box w={312} h={246}>
            {imageEl}
          </Box>
          <Text color="charcoal" textTransform="uppercase" textStyle="heading2">
            {title}
          </Text>
        </Flex>
      </Box>
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
  }
`;
