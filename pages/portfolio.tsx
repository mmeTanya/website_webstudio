import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Projects from '../components/projects'


const Portfolio: NextPage = () => {
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
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Portfolio