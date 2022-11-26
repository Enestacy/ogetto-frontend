import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from '../src/components/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container display={'flex'} p={0} justifyContent={'flex-start'} flexDir="column" alignItems={'center'} h='100%' maxH={'100%'} maxW='100%'>
        <Header></Header>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp