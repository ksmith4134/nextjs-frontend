import {motion, AnimatePresence} from 'framer-motion'
import Image from 'next/image'

export default function TeknicCard(props) {

  const {
    cards,
  } = props

  const insertImage = (url) => {
    return (
      <Image src={url} width={80} height={80} layout="fixed" className="rounded-xl" />
    )
  }

  return (
    <div className='mt-12 flex flex-row gap-6 h-full justify-center'>
      {
        cards.map((tek) => (
          <div key={tek.id} className={`flex card p-2 border-2 border-gray-100 place-items-center hover:shadow-xl hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110`}>
            <div className='flex-none'>
              {tek.imgURL && insertImage(tek.imgURL)}
            </div>
            <div className='px-4'>
              <h4 className='font-bold text-teknic-blue'>{tek.heading}</h4>
              <p>{tek.subHeading}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
