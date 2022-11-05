import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Qualities from '../components/qualities'
import Work from '../components/work'
import Team from '../components/team'
import Clients from '../components/clients'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>WebStudio</title>
        <meta name="description" content="WebStudio" />
        <link rel="icon" href="/flower.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Qualities />
        <Work />
        <Team />
        <Clients />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
