import { createContext } from 'react';

import { Locale } from 'src/utils/types';

const LocaleContext = createContext({
  locale: 'en-US',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLocale: (_: Locale) => {
    // filled in later!
  },
});
export const ThingsProvider = LocaleContext.Provider;
export default LocaleContext;
