import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { Lobby } from '../src/components/Lobby/Lobby'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <Box w={'inherit'}>
      <Head>
        <title>O-getter</title>
        <meta name="description" content="Oggetto" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Lobby />
    </Box>

  )
}
