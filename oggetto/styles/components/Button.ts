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
    modal_ok: {
      borderRadius: 5,
      bgColor: 'main',
      color: 'black',
    },
    open_task: {
      whiteSpace: 'none',
      p:0,
      m:1,
      outline: 'none',
      w: 'auto',
      h: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0px 16px 50px 10px rgba(166, 164, 164, 0.2)',
      minH: 72,
      border: 0,
      minW: 'none',
      maxW: 'none',
      maxH: 'none',
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
    black_little: {
      alignSelf: 'center',
      bgColor: 'black',
      color: 'white',
      borderRadius: 6,
      m:1,
      fontSize: 'md',
      px: 10,
      py: 6,
    },
    yellow_little: {
      alignSelf: 'center',
      bgColor: 'main',
      color: 'black',
      borderRadius: 6,
      m:1,
      fontSize: 'md',
      px: 10,
      py: 6,
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
