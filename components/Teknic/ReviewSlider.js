import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import FiveStars from './FiveStars'

export default function ReviewSlider(props) {

  const {
    reviews = [
      {
        id: 2,
        name: "Jeremy Walton",
        comment: "Very approachable products that perform well, are cost effective, and are easy to use. The staff is extremely helpful and knowledgeable, and provide excellent customer service. The ordering process is simple, and delivery is fast. Overall a terrific company to work with!"
      },
      {
        id: 4,
        name: "Nolan McCann",
        comment: "I can't say anything that hasn't already been said - Teknic products are the gold standard for servo drives, and their customer service is second to none. These are (and will continue to be) my go-to drives whenever I start a new build that requires precise motion control. "
      },
      {
        id: 7,
        name: "John Borton",
        comment: "I have been using Clearpath servos and related products for the last year or so. The service has been exceptional (both customer and technical) and the products have been awesome. We are headed down a factory path which will involved scores of these servos and we couldn't be happier or more confident in our choice. Thanks Teknic."
      }
    ]
  } = props

  
  // SLIDER
  const [reviewIndex, setReviewIndex] = useState(0)
  
  const prevReviewIndex = (index) => {
    index === 0 ? setReviewIndex(reviews.length-1) : setReviewIndex(index-1)
  }

  const nextReviewIndex = (index) => {
    index === reviews.length-1 ? setReviewIndex(0) : setReviewIndex(index+1)
  }


  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-100 py-24">
      <div className='sm:w-11/12 md:w-10/12 mx-auto px-0 lg:px-4'>
        <div className='mx-auto text-center pb-4'>
          <div className='rounded-full bg-teknic-blue text-white text-xl font-semibold w-52 text-center mx-auto py-2'>
            Reviews
          </div>
          <h1 className="text-6xl font-bold text-black mt-10">See What They're Saying</h1>
          <h2 className="text-xl mt-4 text-black">Check out over 100 Google reviews made by OEMs and end-users</h2>
        </div>
        <FiveStars marginTop={"mt-2"} classes={"text-xl px-1"} />
        <div className='mt-12'>
          <div className='flex justify-end items-center'>
            <div className='flex justify-end w-[100px] mr-4 ml-auto'>
              <FontAwesomeIcon icon={faChevronLeft} className="ml-auto py-2 px-4 rounded-full text-4xl text-gray-800 hover:bg-teknic-blue/50 hover:text-white hover:cursor-pointer hover:scale-125 transition duration-200 ease-in-out" onClick={()=> prevReviewIndex(reviewIndex)} />
            </div>
            {
              reviews.map((review, index) => (
                <div key={review.id} className={`flex-1 py-6 px-12 bg-white rounded-2xl shadow-2xl shadow-gray-400/50 max-w-xl mx-auto ${index === reviewIndex ? "" : "hidden"}`}>
                  <div className='flex justify-between'>
                    <h4 className='font-bold'>{review.name}</h4>
                    <FiveStars marginTop={""} classes={"text-sm md:text-md md:px-[2px]"} />
                  </div>
                  <p className='mt-2'>{review.comment}</p>
                </div>
              ))
            }
            <div className='flex justify-start w-[100px] ml-4 mr-auto'>
              <FontAwesomeIcon icon={faChevronRight} className="mr-auto py-2 px-4 rounded-full text-4xl text-gray-800 hover:bg-teknic-blue/50 hover:text-white hover:cursor-pointer hover:scale-125 transition duration-200 ease-in-out" onClick={()=> nextReviewIndex(reviewIndex)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
