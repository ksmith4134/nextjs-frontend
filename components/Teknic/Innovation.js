import Image from 'next/image'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GStopAnim from './gStopAnim'
import RAS from './RAS'

function Innovation() {
  return (
    <div className="bg-white pb-36">
      <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
        <div className='mx-auto text-center pt-36'>
          <div className='rounded-full bg-amber-400 text-white text-xl font-semibold w-52 text-center mx-auto py-2'>
            Technology
          </div>
          <h1 className="text-6xl font-bold text-black mt-6">Innovation at Every Turn</h1>
          <h2 className="text-xl mt-4">Learn more about Teknic's industry-leading engineering</h2>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-12 place-items-center max-w-5xl mx-auto mt-24">
          <div className="order-2 lg:order-1 col-span-12 lg:col-span-5 lg:pr-14 mt-12 lg:-mt-2">
            <p className='text-gray-400 text-md'>Vibration suppression</p>
            <h3 className="font-bold text-3xl text-black mt-2">g-Stop&trade;</h3>
            <p className="mt-2">g-Stop&trade; is a motion trajectory algorithm that reduces system vibrations by removing energy where there are machine resonances and concentrating energy where there are none. This results in smoother and faster point-to-point motion profiles.</p>
            <div className='rounded-full bg-[#FF0000] shadow-lg shadow-white border-2 border-white hover:bg-[#fff] hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]/30 hover:shadow-lg hover:shadow-[#ff0000]/40 text-white text-md font-semibold w-32 text-center py-2 mt-4 hover:cursor-pointer'>
              Demo&nbsp;&nbsp;
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className="order-1 lg:order-2 col-span-12 lg:col-span-7 relative">
            <GStopAnim />
          </div>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-12 place-items-center max-w-5xl mx-auto mt-24">
          <div className="order-2 lg:order-2 col-span-12 lg:col-span-5 lg:pl-12 mt-12 lg:mt-0">
            <p className='text-gray-400 text-md'>Adaptive gain control</p>
            <h3 className="font-bold text-3xl text-black mt-2">Inertia Matching Technology</h3>
            <p className="mt-2">Inertia Matching Technology (IMT) provides adaptive gain control for high-inertial and dynamically-changing loads (such as those found in material cutting applications). IMT enables engineers to design systems with much higher inertia ratios than specified by most servo manufacturers, allowing the use of smaller, less expensive motors.</p>
            <div className='rounded-full bg-[#FF0000] shadow-lg shadow-white border-2 border-white hover:bg-[#fff] hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]/30 hover:shadow-lg hover:shadow-[#ff0000]/40 text-white text-md font-semibold w-32 text-center py-2 mt-4 hover:cursor-pointer'>
              Demo&nbsp;&nbsp;
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className="order-1 lg:order-1 col-span-12 lg:col-span-7">
            <Image src="/rackpinion_2b.jpg" width={1000} height={560} className="rounded-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-12 place-items-center max-w-5xl mx-auto mt-24 -mb-12">
          <div className="order-2 lg:order-1 col-span-12 lg:col-span-5 lg:pr-12 -mt-8">
            <p className='text-gray-400 text-md'>Motion smoothing</p>
            <h3 className="font-bold text-3xl text-black mt-2">Regressive AutoSpline&trade;</h3>
            <p className="mt-2">RAS motion profiles go beyond traditional motion smoothing algorithms (such as S-curving or cosine smoothing) by limiting the motion profile’s jerk and jerk-derivative. The RAS algorithm reduces move settling time, machine vibration, audible noise, mechanical wear, heat generation, and power usage.</p>
            <div className='rounded-full bg-[#FF0000] shadow-lg shadow-white border-2 border-white hover:bg-[#fff] hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]/30 hover:shadow-lg hover:shadow-[#ff0000]/40 text-white text-md font-semibold w-32 text-center py-2 mt-4 hover:cursor-pointer'>
              Demo&nbsp;&nbsp;
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className="order-1 lg:order-2 col-span-12 lg:col-span-7 w-full pt-10">
            <RAS />
          </div>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-12 place-items-center max-w-5xl mx-auto mt-24">
          <div className="order-2 lg:order-2 col-span-12 lg:col-span-5 lg:pl-12 mt-12 lg:mt-0">
            <p className='text-gray-400 text-md'>Software protecting hardware</p>
            <h3 className="font-bold text-3xl text-black mt-2">SmartSaturation&trade;</h3>
            <p className="mt-2">Your machine may experience anything from brown outs to physically jammed mechanics. Teknic servos will handle the resulting inadvertent voltage or current clipping in a stable and graceful manner—and will never "burn up" in the process.</p>
            <div className='rounded-full bg-[#FF0000] shadow-lg shadow-white border-2 border-white hover:bg-[#fff] hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]/30 hover:shadow-lg hover:shadow-[#ff0000]/40 text-white text-md font-semibold w-32 text-center py-2 mt-4 hover:cursor-pointer'>
              Demo&nbsp;&nbsp;
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className="order-1 lg:order-1 col-span-12 lg:col-span-7">
            <Image src="/4-axis.jpg" width={900} height={506} className="rounded-2xl" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Innovation