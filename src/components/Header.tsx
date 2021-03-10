import React from 'react';

import { Box, Button, Input, Spacer, Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

function Header(): JSX.Element {
  const data: GatsbyTypes.HeaderQueryQuery = useStaticQuery<GatsbyTypes.HeaderQueryQuery>(graphql`
    query HeaderQuery {
      contentfulAsset(title: { eq: "Logo" }) {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
        description
      }
    }
  `);

  return (
    <Flex h="20vh" maxH="100px" wrap="nowrap" py="10px" px="40px" flexDir="row">
      <Flex align="center" flexDir="row">
        <Box w="150px" paddingRight="20px">
          {data.contentfulAsset?.fluid != null ? (
            <Img fluid={data.contentfulAsset.fluid} alt={data.contentfulAsset.description} />
          ) : null}
        </Box>
        <Spacer />
        <Input
          type="text"
          id="header-search"
          placeholder="search website"
          name="s"
          variant="outline"
          w="300px"
          size="sm"
          borderRadius="30px"
        />
      </Flex>

      <Spacer />
      <Flex align="center" flexDir="row">
        <Button variant="secondary" fontSize="16px" _hover={{ color: '#65BF73' }}>
          Get Involved
        </Button>
        <Spacer />
        <Button variant="primary" fontSize="16px">
          Donate
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
