import React, { createContext, useContext } from 'react';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Locale } from 'src/utils/types';
import useLocalStorage from 'src/utils/useLocalStorage';

interface LocaleContextType {
  locale: Locale;
  setLocale: (_: Locale) => void;
  /**
   * Filters elements whose `node_locale` attribute is equal to the current locale
   * @param arr the array of elements
   * @returns the same array, but with non-matching elements removed
   */
  filterLocale: <T extends { node_locale: string }>(arr: Readonly<Array<T>>) => Readonly<Array<T>>;
  /**
   * Returns the first element whose `node_locale` attribute is equal to the current locale
   * @param arr the array of elements
   * @returns the first element that matches
   */
  findLocale: <T extends { node_locale: string }>(arr: Readonly<Array<T>>) => T | undefined;
  formatLocale: typeof format;
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
  findLocale: <T extends { node_locale: string }>(arr: Readonly<Array<T>>) => {
    console.error('findLocale was called without a provider!');
    return arr[0];
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formatLocale: (date, formatString, options) => {
    console.error('formatLocale was called without a provider!');
    return '';
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
  const findLocale = <T extends { node_locale: string }>(arr: Readonly<Array<T>>) => {
    return arr.find(d => d.node_locale === locale);
  };
  const formatLocale: typeof format = (date, formatString, options) => {
    return format(date, formatString, { locale: locale === 'es-US' ? es : undefined, ...options });
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, filterLocale, findLocale, formatLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
