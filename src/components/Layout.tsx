require('../css/base.css');

import React from 'react';
import Container from './Container';
import Navigation from './Navigation';

interface Props {
  location: Location;
  children: React.ReactChild;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
}

export default Layout;
