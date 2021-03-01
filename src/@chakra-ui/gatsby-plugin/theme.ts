import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    green: '#65BF73',
    darkgreen: '#3A8245',
    tangerine: '#FF9737',
    charcoal: '#404040',
    gray: {
      dark: '#404040',
      mid: '#6C6C6C',
      light: '#C4C4C4',
    },
  },
  styles: {
    global: {
      body: {
        color: 'black',
      },
    },
  },
  textStyles: {
    heading1: {
      fontSize: [35, 35, 35],
      fontWeight: 800,
    },
    heading2: {
      fontSize: [28, 28, 28],
      fontWeight: 800,
    },
    subheading1: {
      fontSize: [16, 16, 16],
      fontWeight: 800,
    },
    subheading2: {
      fontSize: [14, 14, 14],
      fontWeight: 800,
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
    body3: {
      fontSize: 14,
    },
    h2: {
      fontSize: ['2em'],
      lineHeight: [1.65, 1.65, 1.65],
    },
    h3: {
      fontSize: '2em',
      lineHeight: '110%',
    },
  },
  components: {
    Button: {
      baseStyle: {
        textStyle: 'body2',
        textTransform: 'uppercase',
        borderRadius: 0,
      },
      variants: {
        primary: {
          bg: 'green',
          color: 'white',
          px: 22,
          py: 4,
          _hover: {
            bg: 'darkgreen',
          },
        },
        secondary: {
          _hover: {
            color: 'tangerine',
          },
        },
      },
    },
  },
  fonts: {
    body: `Avenir`,
    heading: `Avenir`,
  },
  sizes: {
    container: {
      full: '100%',
    },
  },
});

export default theme;
