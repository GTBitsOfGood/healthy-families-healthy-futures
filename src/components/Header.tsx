import React, { useState } from 'react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Spacer, Flex } from '@chakra-ui/react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
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

  const [logoStyle, setLogoStyle] = useState({
    width: '209px',
    height: '76px',
    transition: 'all 200ms linear',
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isLarge = currPos.y > prevPos.y || currPos.y > -55;

      const shouldBeStyle = {
        transition: `all 200ms linear`,
        width: isLarge ? '209px' : '135px',
        height: isLarge ? '76px' : '50px',
        marginTop: isLarge ? '10px' : '0px',
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(logoStyle)) return;

      setLogoStyle(shouldBeStyle);
    },
    [logoStyle],
  );

  return (
    <>
      <Flex
        h="55px"
        w="full"
        px="40px"
        wrap="nowrap"
        flexDir="row"
        position={{ base: 'static', md: 'sticky' }}
        top="0px"
        bg="white"
        zIndex={10}
        align="center"
      >
        <Link to="/">
          <Box style={{ ...logoStyle }} display={['none', null, 'block']}>
            {hfhfLogo}
          </Box>
        </Link>

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
        position={{ base: 'sticky', md: 'static' }}
        top="0px"
        px={6}
        bg="white"
        zIndex="10"
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
