require('../css/base.css');
import 'focus-visible/dist/focus-visible';
import React, { useState } from 'react';

import { Container, useDisclosure } from '@chakra-ui/react';
import LocaleContext from 'src/contexts/LocaleContext';
import { Locale } from 'src/utils/types';
import useLocalStorage from 'src/utils/useLocalStorage';

import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

interface Props {
  location: Location;
  children: React.ReactChild | React.ReactChild[];
}

function Layout({ children }: Props): JSX.Element {
  // Hook to manage side-navigation drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [locale, setLocale] = useLocalStorage<Locale>('locale', 'en-US');

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Container size="full" maxW="none" p={0}>
        <Header onHamburgerClick={onOpen} />
        <Navigation isDrawerOpen={isOpen} onDrawerClose={onClose} />
        {children}
        <Footer />
      </Container>
    </LocaleContext.Provider>
  );
}

export default Layout;
