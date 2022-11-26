import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Container: ComponentStyleConfig = {
  variants: {
    registration: {
      m: 0,
      maxW: 'none',
      w: '100%',
      h: '100%',
      color: 'black',
      bgColor: 'main',
    },
    default: {
      m: 0,
      p: 0,
      maxW: 'none',
      border: '0px dashed transparent',
    },
  },
  defaultProps: {
    variant: 'default',
  },
}
