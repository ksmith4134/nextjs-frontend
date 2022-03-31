import TeknicCard from '../components/Teknic/TeknicCard'
import TeknicHero from '../components/Teknic/TeknicHero'
import Image from 'next/image'
import { faArrowRight, faChevronLeft, faChevronRight, faStar, faHeadset, faMicrochip, faAward } from '@fortawesome/free-solid-svg-icons'
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
      <div className='bg-gradient-to-b from-white to-gray-100 mt-20 relative top-[-100px]'>
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
          <div className='mx-auto text-center mt-8'>
            <p className='mb-2 text-gray-400 pt-12'>Powered by</p>
            <Image src="/teknic-logo-vertical.png" width={150} height={125} /> {/* 1.2, 300x250 */}
            <h5 className="text-center text-xl mt-4 w-8/12 mx-auto">Teknic has provided high-performance motion control products and expert, factory-direct OEM support since 1985. Our products are proudly designed and built right here in the USA (Greater Rochester, New York).</h5>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 justify-center pb-36'>
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
      <div className="bg-gradient-to-b from-teknic-blue to-[#074166] pb-24">
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
          <div className='mx-auto text-center pt-24 pb-4'>
            <div className='rounded-full bg-white text-teknic-blue text-xl font-semibold w-52 text-center mx-auto py-2'>
              Reviews
            </div>
            <h1 className="text-6xl font-bold text-white mt-10">See What They're Saying</h1>
            <h2 className="text-xl mt-4 text-white">Check out over 100 Google reviews made by OEMs and end-users</h2>
          </div>
          <div className='flex'>
            <div className='mx-auto mt-2'>
              <FontAwesomeIcon icon={faStar} className="text-xl text-amber-400 px-1" />
              <FontAwesomeIcon icon={faStar} className="text-xl text-amber-400 px-1" />
              <FontAwesomeIcon icon={faStar} className="text-xl text-amber-400 px-1" />
              <FontAwesomeIcon icon={faStar} className="text-xl text-amber-400 px-1" />
              <FontAwesomeIcon icon={faStar} className="text-xl text-amber-400 px-1" />
            </div>
          </div>
          <div className='mt-12'>
            <div className='flex justify-end items-center'>
              <div className='flex justify-end w-[100px] mr-4 ml-auto'>
                <FontAwesomeIcon icon={faChevronLeft} className="ml-auto py-2 px-4 rounded-full text-4xl text-white hover:bg-cyan-200/40 hover:cursor-pointer hover:scale-125 hover:shadow-sm hover:shadow-gray-400/50" />
              </div>
              
              <div className='flex-1 py-6 px-12 bg-white rounded-2xl shadow-2xl shadow-cyan-200/50 max-w-2xl mx-auto'>
                <div className='flex justify-between'>
                  <div>
                    <h4 className='font-bold'>Jeremy Walton</h4>
                  </div>
                  <div className='flex'>
                    <div className='mx-auto'>
                      <FontAwesomeIcon icon={faStar} className="text-md text-amber-400" />
                      <FontAwesomeIcon icon={faStar} className="text-md text-amber-400 px-1" />
                      <FontAwesomeIcon icon={faStar} className="text-md text-amber-400" />
                      <FontAwesomeIcon icon={faStar} className="text-md text-amber-400 px-1" />
                      <FontAwesomeIcon icon={faStar} className="text-md text-amber-400" />
                    </div>
                  </div>
                </div>
                <p className='mt-2'>Very approachable products that perform well, are cost effective, and are easy to use. The staff is extremely helpful and knowledgeable, and provide excellent customer service. The ordering process is simple, and delivery is fast. Overall a terrific company to work with!</p>
              </div>

              <div className='flex justify-start w-[100px] ml-4 mr-auto'>
                <FontAwesomeIcon icon={faChevronRight} className="mr-auto py-2 px-4 rounded-full text-4xl text-white hover:bg-cyan-200/40 hover:cursor-pointer hover:scale-125 hover:shadow-sm hover:shadow-gray-400/50" />
              </div>
            </div>
          </div>
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