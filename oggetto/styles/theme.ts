import { extendTheme } from '@chakra-ui/react'
import { Text } from './components/Text'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Container } from './components/Container'
import '@fontsource/montserrat'

export const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  colors: {
    main: '#FFDD00',
    black: {
      200: '#151515',
      500: '#151515',
    },
    white: {
      500: '#fff',
    },
    gray: {
      50: '#DFE6E9',
      100: '#B2BEC3',
      200: '#636E72',
    },
  },
  components: {
    Text,
    Input,
    Button,
    Container,
  },
})
