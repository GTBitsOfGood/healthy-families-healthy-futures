import React from 'react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';

interface NavLinkProps {
  link: string;
  text: string;
}

interface NavigationProps {
  data: GatsbyTypes.LayoutQuery;
}

function NavLink(props: NavLinkProps): JSX.Element {
  return (
    <Link
      _hover={{
        textDecoration: 'underline',
        textDecorationColor: '#65BF73',
        textDecorationThickness: '3px',
      }}
      fontFamily="Avenir"
      fontWeight="850"
      fontSize="16px"
      as={GatsbyLink}
      to={props.link}
    >
      {props.text}
    </Link>
  );
}

function Navigation({ data }: NavigationProps): JSX.Element {
  const navigationItems: { [link: string]: string } = {
    '/': 'HOME',
    '/about': 'ABOUT',
    '/recipes/': 'RECIPES',
    '/events-and-classes/': 'EVENTS & CLASSES',
    '/blog/': 'BLOG',
    '/resources/': 'RESOURCES',
  };

  return (
    <>
      <Flex
        h="55px"
        wrap="nowrap"
        mx="auto"
        flexDir="row"
        w="full"
        justifyContent="space-evenly"
        alignItems="center"
        display={['none', null, 'flex']}
      >
        {Object.keys(navigationItems).map(link => {
          return <NavLink link={link} text={navigationItems[link]} key={link} />;
        })}
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
        <HamburgerIcon h={6} w={6} color="gray.700" />
        <Box w="178px" display={['block', null, 'none']} margin="auto">
          {data.contentfulAsset?.fluid != null ? (
            <Img
              fluid={data.contentfulAsset.fluid}
              alt={data.contentfulAsset.description}
              imgStyle={{ objectFit: 'contain' }}
            />
          ) : null}
        </Box>
      </Flex>
    </>
  );
}

export default Navigation;
