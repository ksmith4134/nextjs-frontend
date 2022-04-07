import { faArrowRight, faHeadset, faMicrochip, faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

function PoweredBy() {
  return (
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
            <div className='rounded-full bg-teknic-blue text-white text-md font-semibold w-40 text-center py-2 mt-6 hover:shadow-lg hover:shadow-teknic-blue/50 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110'>
              Learn more&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className='px-4 mt-16'>
            <FontAwesomeIcon icon={faMicrochip} className="text-4xl" />
            <h3 className='text-xl font-bold mt-4'>Innovative Performance</h3>
            <p className='mt-2'>Automation is often one of the areas with the most potential to excel for machine performance and marketability. Better performance and reliability are two of the most tangible advantages and Teknic has numerous proprietary features that directly address these goals. For example, the g-Stop™ anti-resonance motion algorithm reduces machine vibration and ringing while simultaneously allowing faster motion.</p>
            <div className='rounded-full bg-teknic-blue text-white text-md font-semibold w-40 text-center py-2 mt-6 hover:shadow-lg hover:shadow-teknic-blue/50 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110'>
              Learn more&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className='px-4 mt-16'>
            <FontAwesomeIcon icon={faAward} className="text-4xl" />
            <h3 className='text-xl font-bold mt-4'>3+ Year Warranty</h3>
            <p className='mt-2'>Teknic builds its products using single-piece flow manufacturing techniques and comprehensive, automated, quality control. Every servo motor undergoes more than 80 in-process quality checks, and gets a 100% full functional and stress test upon completed assembly. Teknic's focus on quality gives us the confidence to offer a 3+ year warranty on all of our servo motors, controls, drives, and power supplies.</p>
            <div className='rounded-full bg-teknic-blue text-white text-md font-semibold w-40 text-center py-2 mt-6 hover:shadow-lg hover:shadow-teknic-blue/50 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110'>
              Learn more&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoweredBy