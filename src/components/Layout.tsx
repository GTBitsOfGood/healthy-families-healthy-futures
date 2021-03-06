require('../css/base.css');
import 'focus-visible/dist/focus-visible';
import React from 'react';

import { Container } from '@chakra-ui/react';

import Navigation from './Navigation';

interface Props {
  location: Location;
  children: React.ReactChild | React.ReactChild[];
}

function Layout({ children }: Props): JSX.Element {
  return (
    <Container size="full" maxW="none" mb={40}>
      <Navigation />
      {children}
    </Container>
  );
}

export default Layout;
