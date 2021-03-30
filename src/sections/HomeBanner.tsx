import React from 'react';

import { Box, Heading, Button } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';

interface Props {
  data: GatsbyTypes.HomeBannerFragment;
}

const HomeBanner = ({ data }: Props) => {
  const banner = data.contentfulHomeBanner;
  return (
    <Box
      w={{ base: '90vw', md: 560 }}
      marginTop={240}
      mx={{ base: 'auto' }}
      marginLeft={{ md: 180 }}
    >
      <Heading textStyle="heading1" color="creamsicle">
        {banner?.titleLine1}
      </Heading>
      <Heading textStyle="heading1" color="creamsicle">
        {banner?.titleLine2}
      </Heading>
      <Heading mt="13px" fontWeight="light" textStyle="subheading1" fontSize="16px">
        {banner?.body?.childMarkdownRemark?.rawMarkdownBody}
      </Heading>
      <Box marginTop={31} marginBottom={300}>
        <Link to={banner?.ctaLink ?? '/about'}>
          <Button variant="neutral" fontSize="16px">
            {banner?.ctaText}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomeBanner;

export const fragment = graphql`
  fragment HomeBanner on Query {
    contentfulHomeBanner {
      titleLine1
      titleLine2
      body {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      ctaLink
      ctaText
    }
  }
`;
