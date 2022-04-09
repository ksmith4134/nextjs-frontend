import Deployment from '../components/Home/Deployment'
import Header from '../components/Home/Header'
import Stack from '../components/Home/Stack'

export default function Home() {
  return (
    <div>
      <Header />
      <Stack />
      <Deployment />
      
      <div className="bg-white">
        <div className='sm:w-11/12 md:w-10/12 mx-auto'>
          <div className=''>
            
          </div>
        </div>
      </div>

    </div>
  )
}