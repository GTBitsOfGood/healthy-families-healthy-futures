import React from 'react';

import { Flex, Spacer, Link } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

function Navigation(): JSX.Element {
  return (
    <Flex
      h="20vh"
      maxH="100px"
      wrap="nowrap"
      py="10px"
      px="40px"
      flexDir="row"
      paddingRight="131px"
      paddingLeft="131px"
    >
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
        to="/"
      >
        HOME
      </Link>
      <Spacer />
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
        to="/about"
      >
        ABOUT
      </Link>
      <Spacer />
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
        to="/recipes/"
      >
        RECIPES
      </Link>
      <Spacer />
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
        to="/events-and-classes/"
      >
        EVENTS & CLASSES
      </Link>
      <Spacer />
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
        to="/blog/"
      >
        BLOG
      </Link>
      <Spacer />
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
        to="/resources/"
      >
        RESOURCES
      </Link>
    </Flex>
  );
}

export default Navigation;
