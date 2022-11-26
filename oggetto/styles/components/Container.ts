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
    header: {
      display: 'flex',
      flexDirection: 'row',
      w: '100%',
      maxW: 'none',
      px: 5,
      justifyContent: 'space-between',
    },
    task: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0px 16px 50px 10px rgba(166, 164, 164, 0.2)',
      p: 10,
      m:1,
      w: 'md',
      minH: 72,
      bg: 'white',
      border: '1px solid',
      borderRadius: 10,
      borderColor: 'black',
    },
    task_done: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0px 16px 50px 10px rgba(166, 164, 164, 0.2)',
      p: 10,
      m:1,
      w: 'md',
      minH: 72,
      bg: 'main',
      borderRadius: 10,
    },
    task_description: {
      m: 0,
      p: 0,
    },
    task_tag: {
      borderRadius: 5,
      textAlign: 'center',
      w: 'auto',
      m:1,
      px:2,
      py:1,
      bgColor: 'main',
      color: 'black',
    },
    default: {
      m: 0,
      p: 0,
      maxW: 'none',
      border: '0px dashed transparent',
    },
    people: {
      w: '100%',
      p:0,
      m: 0,
      maxW: 'none',
    },
    people_advice: {
      mt: 10,
      mx: 0,
      p: 10,
      w: '100%',
      maxW: 'none',
      h: '2xl',
      bgColor: 'second',
    },
    people_advice_card: {
      maxW: 'xl',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0px 16px 50px 0px rgba(183, 183, 183, 0.2)',
      p: 10,
      bgColor: 'white',
      borderRadius: 16,
      h: '80',
    },
    tags_container: {
      gap: 2,
      justifyContent: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      p:0,
      m: 0,
      maxW: 'none',
    },
    people_tag: {
      w: 'auto',
      m:0,
      borderRadius: 5,
      bgColor: 'gray.100',
    },
    people_tag_active: {
      borderRadius: 5,
      m:0,
      bgColor: 'main',
    },
    people_around: {
      alignItems: 'flex-start',
      p: 10,
      mx: 10,
      w: '100%',
      maxW: 'none',
      m:0,
      display: 'flex',
      gap: 5,
      flexDirection: 'column',
    },
    people_around_card: {
      mx: 10,
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0px 16px 50px 10px rgba(183, 183, 183, 0.2)',
      bgColor: 'white',
      border: '2px solid',
      // borderColor: 'main',
      m: 0,
      p: 5,
      minH: 'xs',
      maxW: '80',
      // minW: 80,
    }
  },
  defaultProps: {
    variant: 'default',
  },
}
