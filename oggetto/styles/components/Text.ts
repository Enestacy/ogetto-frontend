import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Text: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    xs: {
      fontSize: '10',
    },
    sm: {
      fontSize: '12',
    },
    md: {
      fontSize: '14',
    },
    lg: {
      fontSize: '18',
    },
  },
  variants: {
    input_label: {
      fontWeight: 600,
      mb: 2,
    },
    task_title: {
      fontWeight: 'bold',
      fontSize: '3xl',
    },
    task_description: {
      fontWeight: 'regular',
      fontSize: 'md',
    },
    lobby_title_hello: {
      fontSize: '5xl',
      fontWeight: 'extrabold',
    },
    lobby_title_tasks: {
      fontSize: 'xl',
      fontWeight: 'regular',
    },
    progress_title_big: {
      fontSize: '2xl'
    },
    progress_title_big_pros: {
      fontSize: '5xl',
      fontWeight: 'bold',
    },
    people_card_title: {
      fontSize: 'xl',
      fontWeight: 'bold',
    },
    people_card_position: {
      fontSize: 'sm',
      ml: 5,
      color: 'gray',
    }
  },
}
