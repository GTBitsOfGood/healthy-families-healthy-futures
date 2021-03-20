require('../css/base.css');
import 'focus-visible/dist/focus-visible';
import React from 'react';

import { Container } from '@chakra-ui/react';

import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

interface Props {
  location: Location;
  children: React.ReactChild | React.ReactChild[];
}

function Layout({ children }: Props): JSX.Element {
  return (
    <Container size="full" maxW="none" p={0}>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
