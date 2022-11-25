import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>O-getter</title>
        <meta name="description" content="Oggetto" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        контент
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
