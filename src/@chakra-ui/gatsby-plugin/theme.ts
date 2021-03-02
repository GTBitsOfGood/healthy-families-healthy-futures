import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    green: {
      500: '#65BF73',
      600: '#3A8245',
      700: '#23512A',
    },
    tangerine: { 500: '#FF9737', 600: '#E57A16', 700: '#BA5F0C' },
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
      fontSize: [35, null, 35],
      lineHeight: ['55px', null, '55px'],
      fontWeight: 800,
    },
    heading2: {
      fontSize: [28, null, 28],
      lineHeight: ['44px', null, '44px'],
      fontWeight: 800,
    },
    subheading1: {
      fontSize: [16, null, 16],
      lineHeight: ['25px', null, '25px'],
      fontWeight: 800,
    },
    subheading2: {
      fontSize: [14, null, 14],
      lineHeight: ['22px', null, '22px'],
      fontWeight: 800,
    },
    body1: {
      fontSize: [18, null, 18],
      lineHeight: ['28px', null, '28px'],
    },
    body2: {
      fontSize: [16, null, 16],
      lineHeight: ['25px', null, '25px'],
    },
    body3: {
      fontSize: [14, null, 14],
      lineHeight: ['22px', null, '22px'],
    },
  },
  components: {
    Button: {
      baseStyle: {
        textStyle: 'body2',
        textTransform: 'uppercase',
        borderRadius: 0,
        height: `fit-content`,
        px: '22px',
        py: '4px',
      },
      variants: {
        primary: {
          bg: 'green.500',
          color: 'white',
          _hover: {
            bg: 'green.600',
          },
          _active: {
            bg: 'green.700',
          },
        },
        secondary: {
          _hover: {
            color: 'tangerine.500',
          },
          _active: {
            color: 'tangerine.600',
          },
        },
        neutral: {
          bg: 'tangerine.500',
          textTransform: 'none',
          _hover: {
            bg: 'tangerine.600',
          },
          _active: {
            bg: 'tangerine.700',
          },
        },
        ghost: {
          fontSize: 14,
          textTransform: 'none',
          _hover: {
            bg: 'gray.light',
          },
          _active: {
            bg: 'gray.mid',
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
