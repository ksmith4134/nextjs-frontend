import TeknicCard from './TeknicCard'
import TeknicHero from './TeknicHero'
import { useState } from 'react'

export default function Products({ heros, cards }) {

  const [selectedTab, setSelectedTab] = useState("1")

  const tabClick = (id) => {
    setSelectedTab(id)
  }

  return (
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
  )
}
