import React from 'react';

import { Flex, Link } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

interface NavLinkProps {
  link: string;
  text: string;
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

function Navigation(): JSX.Element {
  const navigationItems: { [link: string]: string } = {
    '/': 'HOME',
    '/about': 'ABOUT',
    '/receipes/': 'RECIPES',
    '/events-and-classes/': 'EVENTS & CLASSES',
    '/blog/': 'BLOG',
    '/resources/': 'RESOURCES',
  };

  return (
    <Flex
      h="55px"
      wrap="nowrap"
      mx="auto"
      flexDir="row"
      w="full"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {Object.keys(navigationItems).map(link => {
        return <NavLink link={link} text={navigationItems[link]} key={link} />;
      })}
    </Flex>
  );
}

export default Navigation;
