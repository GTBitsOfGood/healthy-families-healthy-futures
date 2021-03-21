/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { Box, Button, Spacer, Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

function Header(): JSX.Element {
  const data: GatsbyTypes.HeaderQuery = useStaticQuery<GatsbyTypes.HeaderQuery>(graphql`
    query Header {
      contentfulAsset(title: { eq: "Logo" }) {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
        description
      }
    }
  `);

  return (
    <Flex h="55px" w="full" px="40px" wrap="nowrap" flexDir="row">
      <Flex align="center" flexDir="row">
        <Box w="135px" maxH="50px" mr="20px">
          {data.contentfulAsset?.fluid != null ? (
            <Img
              fluid={data.contentfulAsset.fluid}
              alt={data.contentfulAsset.description}
              imgStyle={{ objectFit: 'contain' }}
              style={{ maxHeight: `50px` }}
            />
          ) : null}
        </Box>
        {/* <Input
          type="text"
          id="header-search"
          placeholder="search website"
          name="s"
          variant="outline"
          w="300px"
          size="sm"
          borderRadius="30px"
        /> */}
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
