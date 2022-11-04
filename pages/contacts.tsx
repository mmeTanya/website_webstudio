import type { NextPage } from 'next'
import Header from '../components/header'
import Head from 'next/head'
import Footer from '../components/footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Contacts: NextPage = () => {
  return (
      <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header/>
      <main>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  )}

  export default Contacts