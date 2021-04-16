import React from 'react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Spacer, Flex } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { NavLink } from 'src/components/Navigation';

interface Props {
  data: GatsbyTypes.HeaderFragment;
  onHamburgerClick: () => void;
}

function Header({ data, onHamburgerClick }: Props): JSX.Element {
  const hfhfLogo =
    data.headerImage?.fluid != null ? (
      <Img
        fluid={data.headerImage.fluid}
        alt={data.headerImage.description}
        imgStyle={{ objectFit: 'contain' }}
      />
    ) : null;

  return (
    <>
      <Flex h="55px" w="full" px="40px" wrap="nowrap" flexDir="row">
        <Flex align="center" flexDir="row">
          <Link to="/">
            <Box w="135px" maxH="50px" mr="20px" display={['none', null, 'block']}>
              {hfhfLogo}
            </Box>
          </Link>
        </Flex>

        <Spacer />

        <Flex align="center" flexDir="row">
          <NavLink text="Get Involved" link="/get-involved" />
          <Box ml={5}>
            <form action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="hosted_button_id" value="897VXU4F73VQE" />
              <Button type="submit" variant="primary" fontSize="16px">
                Donate
              </Button>
            </form>
          </Box>
        </Flex>
      </Flex>

      <Flex
        wrap="nowrap"
        mx="auto"
        flexDir="row"
        w="full"
        alignItems="center"
        display={['flex', null, 'none']}
        px={6}
        my={3}
        borderTop="1px"
        borderTopColor="gray.400"
      >
        <HamburgerIcon h={6} w={6} color="gray.700" onClick={onHamburgerClick} />
        <Box w="178px" display={['block', null, 'none']} margin="auto">
          <Link to="/">{hfhfLogo}</Link>
        </Box>
      </Flex>
    </>
  );
}

export default Header;

export const fragment = graphql`
  fragment Header on Query {
    headerImage: contentfulAsset(title: { eq: "Logo" }) {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid
      }
      description
    }
  }
`;
