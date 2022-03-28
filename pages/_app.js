import '../styles/globals.css'
import Nav from '../components/Home/Nav'
import Head from 'next/head'
import Footer from '../components/Home/Footer'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <div>
        <Head>
          <title>Shooing Project</title>
          <meta name='description' content='shopping project for sell'/>
        </Head>
        <Nav/>
        <Component {...pageProps} />
        <Footer/>
    </div>
  )
}

export default MyApp
