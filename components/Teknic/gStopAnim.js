import Image from 'next/image'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function GStopAnim() {
  return (
    <>
      <Image src="/graphs_3.png" width={735} height={360} />
      {/* <span className='absolute bottom-[0%] left-[0%]'>
        <Image src="/graphs-axes_2.png" width={735} height={360} />
      </span> */}
      {/* <div className='absolute -top-[3%] -left-[2%] z-20 text-gray-600 text-md font-semibold'>v</div>
      <div className='absolute top-[50%] -left-[2%] z-20 text-teknic-blue text-md font-semibold'>v</div>
      <div className='absolute bottom-[54.9%] left-[48%] z-20 text-gray-600 text-md font-semibold'>t</div>
      <div className='absolute bottom-[1.8%] left-[48%] z-20 text-teknic-blue text-md font-semibold'>t</div> */}
      <FontAwesomeIcon icon={faArrowRight} className="arrows text-4xl text-gray-400 absolute bottom-[75%] left-[54%]" />
      <span className='vial-zoom absolute bottom-[0%] left-[0%]'>
        <Image src="/vial_splash_zoom_2.png" width={735} height={360} />
      </span>
      <span className='vial-splash absolute bottom-[0%] left-[0%]'>
        <Image src="/vial_splash_small_2.png" width={735} height={360} /> {/* 38x157, .242 */}
      </span>
      <FontAwesomeIcon icon={faArrowRight} className="arrows text-4xl text-teknic-blue absolute bottom-[20%] left-[54%]" />
      <span className='vial-zoom absolute bottom-[0%] left-[0%]'>
        <Image src="/vial_clean_zoom_2.png" width={735} height={360} />
      </span>
      <span className='vial-clean absolute bottom-[0%] left-[0%]'>
        <Image src="/vial_clean_small_2.png" width={735} height={360} /> {/* 39x161, .2422 */}
      </span>
      <div className='graphs absolute w-[48%] h-[40%] top-[1%] left-[.75%] bg-white'></div>
      <div className='graphs absolute w-[48%] h-[40%] top-[54%] left-[.75%] bg-white'></div>
    </>
  )
}
