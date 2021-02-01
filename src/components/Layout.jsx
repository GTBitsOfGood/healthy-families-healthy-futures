import React from 'react';
import { Link } from 'gatsby';
import base from '../css/base.css';
import Container from './container';
import Navigation from './navigation';

function Layout({ location, children }) {
  let header;

  let rootPath = `/`;
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`;
  }

  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
}

export default Layout;
