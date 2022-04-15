import '../styles/globals.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-full'>
      <Nav />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
    
  )
  
}

export default MyApp
