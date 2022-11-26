import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'
import defaultTheme from '@chakra-ui/theme'

export const Input: ComponentStyleConfig = {
  variants: {
    outline: (props: StyleFunctionProps) => ({
      ...defaultTheme?.components?.Input?.variants?.outline(props),
      field: {
        ...defaultTheme?.components?.Input?.variants?.outline(props).field,
        border: 0,
        w: 'lg',
        fontSize: 'xl',
        h: 16,
        borderRadius: 7,
        mb: 5,
        borderColor: 'gray.50',
        bgColor: 'white',
        _placeholder: { color: 'gray.200', fontSize: '14' },
        _focus: {
          borderColor: 'none',
          boxShadow: 'none',
          zIndex: 0,
        },
      },
    }),
  },
  defaultProps: {
    variant: 'outline',
  },
}
