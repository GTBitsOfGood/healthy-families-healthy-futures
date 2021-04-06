import React, { createContext, useContext } from 'react';

import { Locale } from 'src/utils/types';
import useLocalStorage from 'src/utils/useLocalStorage';

interface LocaleContextType {
  locale: Locale;
  setLocale: (_: Locale) => void;
  filterLocale: <T extends { node_locale: string }>(arr: Readonly<Array<T>>) => Readonly<Array<T>>;
}

// We have to define "default values" here even though they never get used
const LocaleContext = createContext<LocaleContextType>({
  locale: 'en-US',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLocale: (_: Locale) => {
    console.error('setLocale was called without a provider!');
  },
  filterLocale: <T extends { node_locale: string }>(arr: Readonly<Array<T>>) => {
    console.error('filterLocale was called without a provider!');
    return arr;
  },
});

export const useLocale = () => {
  return useContext(LocaleContext);
};

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useLocalStorage<Locale>('locale', 'en-US');
  const filterLocale = <T extends { node_locale: string }>(arr: Readonly<Array<T>>) => {
    return arr.filter(d => d.node_locale === locale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, filterLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
