import { getTeknicFeatures, getTeknicHomepage } from '../lib/api'
import { useState } from 'react'
import Image from 'next/image'
import TeknicCard from '../components/Teknic/TeknicCard'
import TeknicHero from '../components/Teknic/TeknicHero'
import Reviews from '../components/Teknic/Reviews'
import PoweredBy from '../components/Teknic/PoweredBy'
import Innovation from '../components/Teknic/Innovation'

export default function Featurette({ heros, cards }) {

  const [selectedTab, setSelectedTab] = useState("1")

  const tabClick = (id) => {
    setSelectedTab(id)
  }

  return (
    <div className='mt-6'>

      {/* HEADER */}
      <div className="bg-white">
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
          <div className='mx-auto text-center pt-12'>          
            <div className='rounded-full bg-teknic-blue text-white text-xl font-semibold w-52 text-center mx-auto py-2'>
              ClearPath
            </div>
            <h1 className="text-center text-6xl font-bold mt-6">Machine Control Designed for OEMs</h1>
            <h2 className="text-center text-xl mt-4">Integrated brushless servo motors, controllers, power supplies, and accessories</h2>
            <div className='mt-16 relative z-10'>
              <Image src="/teknic-product-family.png" width={1000} height={526} /> {/* 1.901, 1000x526 */}
            </div>
          </div>
        </div>
      </div>

      {/* POWERED BY TEKNIC */}
      <PoweredBy />

      {/* PRODUCTS */}
      <div className="bg-white pb-36">
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
          <div className='mx-auto text-center pt-12 pb-4'>
            <div className='rounded-full bg-amber-400 text-white text-xl font-semibold w-52 text-center mx-auto py-2'>
              Shop Online
            </div>
            <h1 className="text-6xl font-bold text-teknic-blue mt-6">Motion Control Products</h1>
            <h2 className="text-xl mt-4">Click below to view introductory information for each of our product lines</h2>
          </div>
          <TeknicCard cards={cards} onChange={tabClick} selected={selectedTab} />
          <TeknicHero heros={heros} selected={selectedTab} onChange={tabClick} />
        </div>
      </div>

      {/* REVIEWS */}
      <Reviews />

      {/* INNOVATION */}
      <Innovation />

      {/* DELETE */}
      <div className="bg-gray-100 pb-36">
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
          <div className='mx-auto text-center pt-36 pb-4 relative'> 
            <div className='relative z-10'>
              <div className='rounded-full bg-teknic-blue text-white text-xl font-semibold w-60 text-center mx-auto py-2'>
                Control Architectures
              </div>
              <h1 className="text-6xl font-bold text-gray-800 mt-6">Sophisticated motion. Fractional cost.</h1>
              <h2 className="text-xl mt-4">Check out some example layouts to see how our customers control their machines</h2>
            </div>
            
            {/* <div className='absolute -top-[1.8%] left-[25%] z-0'>
              <Image src="/pcb_2_lg.png" width={257} height={520} />
            </div>
            <div className='absolute -top-[1.8%] left-[30%] z-0'>
              <Image src="/pcb_2_lg.png" width={257} height={520} />
            </div>
            <div className='absolute -top-[1.8%] left-[35%] z-0'>
              <Image src="/pcb_2_lg.png" width={257} height={520} />
            </div>
            <div className='absolute -top-[1.8%] left-[40%] z-0'>
              <Image src="/pcb_2_lg.png" width={257} height={520} />
            </div> */}
            
            <div className='card py-4 rounded-2xl mt-24'>
              <Image src="/clearcore-schematic.svg" width={2000} height={1100} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 pb-36">
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
        </div>
      </div>
    </div>
    
  )
}

export async function getStaticProps () {
  const allFeatures = await getTeknicFeatures()
  const homepage = await getTeknicHomepage()
  return {
    props: {
      cards: allFeatures.data,
      heros: homepage.data.attributes.Heros,
    },
    revalidate: 10,
  }
}