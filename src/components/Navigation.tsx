import React from 'react';

import { Flex, Link } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

function Navigation(): JSX.Element {
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
