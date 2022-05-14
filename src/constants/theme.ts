import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    main: '#FF8E3C',
    contrastText: '#EFEFEF',
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
  },
  secondary: {
    main: '#EFF0F3',
    contrastText: '#0D0D0D',
  },
}
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const disabledBoxShadowComponents = ['Button', 'Popover', 'Input']
const componentObj = disabledBoxShadowComponents.reduce((acc, cur) => {
  return {
    ...acc,
    [cur]: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  }
}, {})

export const themeChakra = extendTheme({
  colors,
  breakpoints,
  components: componentObj,
})
