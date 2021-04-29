require('../css/base.css');
import 'focus-visible/dist/focus-visible';
import React from 'react';

import { Container, useDisclosure } from '@chakra-ui/react';
import { useLocation } from '@reach/router';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocale } from 'src/contexts/LocaleContext';

import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

interface Props {
  data: GatsbyTypes.LayoutFragment;
  children: React.ReactChild | React.ReactChild[];
  pageName?: string;
}

function Layout({ data, children, pageName }: Props): JSX.Element {
  const { findLocale } = useLocale();
  // Hook to manage side-navigation drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (typeof window !== 'undefined') {
    window.onbeforeprint = () => {
      window.scrollTo(0, 0);
    };
  }

  const { pathname } = useLocation();
  const metadata = data?.site?.siteMetadata;
  const title = metadata?.defaultTitle ?? 'Healthy Families Healthy Futures';
  const image = `${metadata?.url ?? ''}${metadata?.image ?? ''}`;
  const url = `${metadata?.url ?? ''}${pathname}`;

  const navData = findLocale(data.allContentfulNavigation.nodes);

  return (
    <Container size="full" maxW="none" p={0}>
      <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`}>
        {pageName != null ? <title>{pageName}</title> : null}
        <meta name="description" content={metadata?.description ?? ''} />
        <meta name="image" content={image} />
        <meta name="og:image" content={image} />
        <meta property="og:url" content={url} />
      </Helmet>
      {navData != null ? (
        <>
          <Header data={navData} onHamburgerClick={onOpen} />
          <Navigation data={navData} isDrawerOpen={isOpen} onDrawerClose={onClose} />
        </>
      ) : null}
      {children}
      <Footer data={data} />
    </Container>
  );
}

export default Layout;

export const fragment = graphql`
  fragment Layout on Query {
    site {
      siteMetadata {
        defaultTitle: title
        description
        url
        image
      }
    }
    allContentfulNavigation {
      nodes {
        node_locale
        ...Header
        ...Navigation
      }
    }
    ...Footer
  }
`;
