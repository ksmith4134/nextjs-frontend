import '../styles/globals.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <div className=''>
      <Nav />
      <div className="px-10 mt-20">
        <Component {...pageProps} />
      </div>
    </div>
    
  )
  
}

export default MyApp
