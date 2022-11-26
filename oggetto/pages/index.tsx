import Head from 'next/head'
import { Lobby } from '../src/components/Lobby/Lobby'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>O-getter</title>
        <meta name="description" content="Oggetto" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Lobby />
    </div>
  )
}
