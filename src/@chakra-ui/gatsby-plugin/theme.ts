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
      fontSize: [20, null, 35],
      lineHeight: ['31px', null, '55px'],
      fontWeight: 800,
    },
    heading2: {
      fontSize: [18, null, 28],
      lineHeight: ['28px', null, '44px'],
      fontWeight: 800,
    },
    subheading1: {
      fontSize: [18, null, 16],
      lineHeight: ['28px', null, '25px'],
      fontWeight: 800,
    },
    subheading2: {
      fontSize: [16, null, 14],
      lineHeight: ['25px', null, '22px'],
      fontWeight: 800,
    },
    body1: {
      fontSize: [16, null, 18],
      lineHeight: ['25px', null, '28px'],
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
        fontWeight: '500',
        textTransform: 'uppercase',
        borderRadius: 0,
        px: '22px',
        py: '4px',
        height: 'min',
      },
      sizes: {
        md: {
          h: 'min',
        },
      },
      variants: {
        defaultProps: {
          variant: 'primary',
        },
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
        back: {
          fontSize: 14,
          px: 0,
          textTransform: 'none',
          _hover: {
            color: 'tangerine.500',
          },
          _active: {
            color: 'tangerine.600',
          },
        },
      },
    },
    Input: {
      defaultProps: {
        size: 'sm',
        variant: 'default',
      },
      variants: {
        default: {
          field: {
            borderWidth: `1px`,
            borderColor: 'gray.light',
            borderRadius: `15px`,
            color: 'black',
            _focus: {
              borderColor: 'black',
            },
            _placeholder: {
              color: 'gray.light',
            },
          },
        },
      },
    },
    Link: {
      variants: {
        'nav-link': {
          textTransform: 'uppercase',
          fontWeight: '800',
          fontSize: '16px',
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
