import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container display={'flex'} p={0} justifyContent={'space-between'} flexDir="column" alignItems={'center'} h='100%' maxH={'100%'} maxW='100%'>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp