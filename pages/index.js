import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Ethan's test app!" />
        <p className="description">
          <a href="https://ethandreed.com/">Ethans dynamic site</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
