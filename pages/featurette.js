import TeknicCard from '../components/Teknic/TeknicCard'
import TeknicHero from '../components/Teknic/TeknicHero'
import Image from 'next/image'
import { faArrowRight, faHeadset, faMicrochip, faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getTeknicFeatures, getTeknicHomepage } from '../lib/api'
import { useState } from 'react'

export default function Featurette({ heros, cards }) {

  const [selectedTab, setSelectedTab] = useState("1")

  const tabClick = (id) => {
    setSelectedTab(id)
  }

  return (
    <div className='mt-6'>
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

      <div className='bg-gradient-to-b from-white to-gray-100 mt-20 relative top-[-100px]'>
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
          <div className='mx-auto text-center mt-8'>
            <p className='mb-2 text-gray-400 pt-12'>Powered by</p>
            <Image src="/teknic-logo-vertical.png" width={150} height={125} /> {/* 1.2, 300x250 */}
            <h5 className="text-center text-xl mt-4 w-8/12 mx-auto">Teknic has provided high-performance motion control products and expert, factory-direct OEM support since 1985. Our products are proudly designed and built right here in the USA (Greater Rochester, New York).</h5>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 justify-center pb-24'>
            <div className='px-4 mt-16'>
              <FontAwesomeIcon icon={faHeadset} className="text-4xl" />
              <h3 className='text-xl font-bold mt-4'>Direct Technical Support</h3>
              <p className='mt-2'>Teknic assigns a non-commissioned, Teknic-employed engineer to each OEM customer to help ensure their success. Some of the OEM consulting services we provide at no charge include: simulations to optimize components for all motion axes, sensitivity analyses, direct technical support throughout the life of your machine, recommendations for best-in-class 3rd-party components, and much more.</p>
              <div className='rounded-full bg-teknic-blue text-white text-md font-semibold w-40 text-center py-2 mt-6'>
                Learn more&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className='px-4 mt-16'>
              <FontAwesomeIcon icon={faMicrochip} className="text-4xl" />
              <h3 className='text-xl font-bold mt-4'>Innovative Performance</h3>
              <p className='mt-2'>Automation is often one of the areas with the most potential to excel for machine performance and marketability. Better performance and reliability are two of the most tangible advantages and Teknic has numerous proprietary features that directly address these goals. For example, the g-Stop™ anti-resonance motion algorithm reduces machine vibration and ringing while simultaneously allowing faster motion.</p>
              <div className='rounded-full bg-teknic-blue text-white text-md font-semibold w-40 text-center py-2 mt-6'>
                Learn more&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className='px-4 mt-16'>
              <FontAwesomeIcon icon={faAward} className="text-4xl" />
              <h3 className='text-xl font-bold mt-4'>3+ Year Warranty</h3>
              <p className='mt-2'>Teknic builds its products using single-piece flow manufacturing techniques and comprehensive, automated, quality control. Every servo motor undergoes more than 80 in-process quality checks, and gets a 100% full functional and stress test upon completed assembly. Teknic's focus on quality gives us the confidence to offer a 3+ year warranty on all of our servo motors, controls, drives, and power supplies.</p>
              <div className='rounded-full bg-teknic-blue text-white text-md font-semibold w-40 text-center py-2 mt-6'>
                Learn more&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-24">
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
          <div className='mx-auto text-center pt-12 pb-4'>
            <div className='rounded-full bg-amber-400 text-white text-xl font-semibold w-52 text-center mx-auto py-2'>
              Shop Online
            </div>
            <h1 className="text-center text-6xl font-bold text-teknic-blue mt-6">Motion Control Products</h1>
            <h2 className="text-center text-xl mt-4">Click below to view introductory information for each of our product lines</h2>
          </div>
          <TeknicCard cards={cards} onChange={tabClick} selected={selectedTab} />
          <TeknicHero heros={heros} selected={selectedTab} onChange={tabClick} />
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