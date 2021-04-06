import React from 'react';

import LocaleProvider from './src/contexts/LocaleContext';

export const shouldUpdateScroll = ({ routerProps }) => {
  return !(routerProps.location.state?.disableScrollUpdate ?? true);
};

export const wrapRootElement = ({ element }) => {
  return <LocaleProvider>{element}</LocaleProvider>;
};
