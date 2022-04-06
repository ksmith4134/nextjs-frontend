import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Reviews() {
  return (
    <div className="bg-gradient-to-b from-[#005f9e] to-teknic-blue py-24"> {/* 005f9e */}
      <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
        <div className='mx-auto text-center pb-4'>
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
              <FontAwesomeIcon icon={faChevronLeft} className="ml-auto py-2 px-4 rounded-full text-4xl text-white hover:bg-cyan-200/60 hover:cursor-pointer hover:scale-125" />
            </div>
            <div className='flex-1 py-6 px-12 bg-white rounded-2xl shadow-2xl shadow-cyan-200/50 max-w-xl mx-auto'>
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
              <FontAwesomeIcon icon={faChevronRight} className="mr-auto py-2 px-4 rounded-full text-4xl text-white hover:bg-cyan-200/60 hover:cursor-pointer hover:scale-125" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
