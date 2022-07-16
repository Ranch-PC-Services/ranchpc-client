import Head from 'next/head'

// Components
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>

      <Head>
        <title>Ranch PC Services</title>
        <meta name="description" content="Build Your Personal Computer that Satisfies You with Us" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main */}

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home;
