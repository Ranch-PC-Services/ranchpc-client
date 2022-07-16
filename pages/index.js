import Head from 'next/head';
import MouseTrail from '@pjsalita/react-mouse-trail';
import mouseTrailConfig from '../config/mousetrail/mousetrail.json';

// Components
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>

      <MouseTrail config={mouseTrailConfig} />

      <Head>
        <title>Ranch PC Services</title>
        <meta name="description" content="Build Your Personal Computer that Satisfies You with Us" />
      </Head>

      {/* mouse trail */}

      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main */}
      <Main />

      {/* Footer */}
      <div className="overflow-hidden z-[100000]">
        <Footer />
      </div>

    </div>
  )
}

export default Home;
