require('../css/base.css');
import 'focus-visible/dist/focus-visible';
import React from 'react';

import { Container, useDisclosure } from '@chakra-ui/react';
import { graphql } from 'gatsby';

import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

interface Props {
  data: GatsbyTypes.LayoutFragment;
  children: React.ReactChild | React.ReactChild[];
}

function Layout({ data, children }: Props): JSX.Element {
  // Hook to manage side-navigation drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container size="full" maxW="none" p={0}>
      <Header data={data} onHamburgerClick={onOpen} />
      <Navigation isDrawerOpen={isOpen} onDrawerClose={onClose} />
      {children}
      <Footer data={data} />
    </Container>
  );
}

export default Layout;

export const fragment = graphql`
  fragment Layout on Query {
    ...Header
    ...Footer
  }
`;
