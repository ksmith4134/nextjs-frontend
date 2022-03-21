import '../styles/globals.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
    
  )
  
}

export default MyApp
