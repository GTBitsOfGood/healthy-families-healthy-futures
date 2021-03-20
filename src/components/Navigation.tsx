import React from 'react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  useDisclosure,
  useStyleConfig,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';

interface NavLinkProps {
  link: string;
  text: string;
  size?: 'sm';
  onClick?: () => void;
}

interface NavigationProps {
  data: GatsbyTypes.LayoutQuery;
}

function NavLink({ link, text, size, onClick }: NavLinkProps): JSX.Element {
  const styles = useStyleConfig('NavLink', { size });

  return (
    <Link as={GatsbyLink} to={link} onClick={onClick} sx={styles}>
      {text}
    </Link>
  );
}

function Navigation({ data }: NavigationProps): JSX.Element {
  const navigationItems: { [link: string]: string } = {
    '/': 'Home',
    '/about': 'About',
    '/recipes': 'Recipes',
    '/events-and-classes': 'Events & Classes',
    '/blog': 'Blog',
    '/resources': 'Resources',
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay>
            <DrawerContent background="#404040" color="white">
              <DrawerHeader>
                <CloseIcon
                  w={4}
                  h={4}
                  float="right"
                  onClick={onClose}
                  _hover={{ cursor: 'pointer' }}
                />
              </DrawerHeader>
              <DrawerBody>
                <Flex direction="column">
                  {Object.keys(navigationItems).map(link => {
                    return (
                      <NavLink link={link} text={navigationItems[link]} key={link} size="sm" />
                    );
                  })}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        <HamburgerIcon h={6} w={6} color="gray.700" onClick={onOpen} />
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
