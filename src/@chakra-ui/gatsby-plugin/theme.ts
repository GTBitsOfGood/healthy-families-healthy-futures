import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    h2: {
      fontSize: ['2em'],
      lineHeight: [1.65, 1.65, 1.65],
    },
    h3: {
      fontSize: '2em',
      lineHeight: '110%',
    },
  },
  fonts: {
    body: `Avenir`,
    heading: `Avenir`,
  },
});

export default theme;
