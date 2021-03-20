require('../css/base.css');
import 'focus-visible/dist/focus-visible';
import React from 'react';

import { Container, useDisclosure } from '@chakra-ui/react';

import Header from './Header';
import Navigation from './Navigation';

interface Props {
  location: Location;
  children: React.ReactChild | React.ReactChild[];
}

function Layout({ children }: Props): JSX.Element {
  // Hook to manage side-navigation drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container size="full" maxW="none" mb={40} p={0}>
      <Header onHamburgerClick={onOpen} />
      <Navigation isDrawerOpen={isOpen} onDrawerClose={onClose} />
      {children}
    </Container>
  );
}

export default Layout;
