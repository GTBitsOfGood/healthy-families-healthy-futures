import React, { useState } from 'react';

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
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { graphql, Link as GatsbyLink } from 'gatsby';

interface NavLinkProps {
  link: string;
  text: string;
  size?: 'sm';
  onClick?: () => void;
}

export function NavLink({ link, text, size, onClick }: NavLinkProps): JSX.Element {
  const styles = useStyleConfig('NavLink', { size });

  return (
    <Link as={GatsbyLink} to={link} onClick={onClick} sx={styles}>
      {text}
    </Link>
  );
}

interface NavigationProps {
  isDrawerOpen: boolean;
  onDrawerClose: () => void;
  data: GatsbyTypes.NavigationFragment;
}

function Navigation({ isDrawerOpen, onDrawerClose, data }: NavigationProps): JSX.Element {
  const links = data.links ?? [];

  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms linear',
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y || currPos.y > -55;

      const shouldBeStyle = {
        visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 200ms linear`,
        transform: isVisible ? 'none' : 'translate(0, -100%)',
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle],
  );

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
        position="sticky"
        top="55px"
        bg="white"
        style={{ ...headerStyle }}
        zIndex={9}
      >
        {links.map(link => {
          return <NavLink link={link?.link ?? ''} text={link?.name ?? ''} key={link?.link ?? ''} />;
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
                {links.map(link => {
                  return (
                    <NavLink
                      link={link?.link ?? ''}
                      text={link?.name ?? ''}
                      key={link?.link ?? ''}
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

export const fragment = graphql`
  fragment Navigation on ContentfulNavigation {
    links {
      link
      name
    }
  }
`;
