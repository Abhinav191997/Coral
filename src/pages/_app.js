import '@/styles/globals.css'
import Navbar from './navbar'
export default function App({ Component, pageProps }) {
  console.log(pageProps)
  console.log(Component)
  return <>
  
  <Navbar/>
  <Component {...pageProps} />
  </>
}
