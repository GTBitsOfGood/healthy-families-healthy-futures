import React from 'react';

import LocaleProvider from './src/contexts/LocaleContext';

export const wrapRootElement = ({ element }) => {
  return <LocaleProvider>{element}</LocaleProvider>;
};
