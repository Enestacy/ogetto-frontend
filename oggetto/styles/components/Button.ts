import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 0,
      _hover: {
        _disabled: {
          bgColor: 'black',
        }
      }
  },
  variants: {
    button: {
    },
    black: {
      bgColor: 'black',
      color: 'white',
      borderRadius: 5,
      m:1,
      fontSize: 'xl',
      px: 20,
      py: 8,
    },
    signUp: {
      borderRadius: 7,
      bgColor: 'transparent',
      color: 'black',
      m:1,
      fontSize: 'xl',
      px: 16,
      py: 8,
    },
    page: {
      fontWeight: 'regular',
    },
    page_active: {
      fontWeight: 'bold',
    },
    power: {
      color: 'black',
      px: 10,
      py: 7,
      borderRadius: 3,
      fontSize: 'xl',
      bgColor: 'main',
    },
  },
  defaultProps: {
    variant: 'button',
    borderRadius: 0,
  },
}
