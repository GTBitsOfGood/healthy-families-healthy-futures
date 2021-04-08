import React from 'react';

import { CloseIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  useStyleConfig,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

interface NavLinkProps {
  link: string;
  text: string;
  size?: 'sm';
  onClick?: () => void;
}

interface NavigationProps {
  isDrawerOpen: boolean;
  onDrawerClose: () => void;
}

export function NavLink({ link, text, size, onClick }: NavLinkProps): JSX.Element {
  const styles = useStyleConfig('NavLink', { size });

  return (
    <Link as={GatsbyLink} to={link} onClick={onClick} sx={styles}>
      {text}
    </Link>
  );
}

function Navigation({ isDrawerOpen, onDrawerClose }: NavigationProps): JSX.Element {
  const navigationItems: { [link: string]: string } = {
    '/': 'Home',
    '/about': 'About',
    '/recipes': 'Recipes',
    '/events-classes': 'Events & Classes',
    '/blog': 'Blog',
    '/resources': 'Resources',
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

      <Drawer placement="left" onClose={onDrawerClose} isOpen={isDrawerOpen} size="xs">
        <DrawerOverlay>
          <DrawerContent background="#404040" color="white">
            <DrawerHeader>
              <CloseIcon
                w={4}
                h={4}
                float="right"
                onClick={onDrawerClose}
                _hover={{ cursor: 'pointer' }}
              />
            </DrawerHeader>
            <DrawerBody>
              <Flex direction="column">
                {Object.keys(navigationItems).map(link => {
                  return (
                    <NavLink
                      link={link}
                      text={navigationItems[link]}
                      key={link}
                      size="sm"
                      // Close drawer if the user clicks the same link that they are currently in
                      onClick={onDrawerClose}
                    />
                  );
                })}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default Navigation;
