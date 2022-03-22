import TeknicCard from '../components/Teknic/TeknicCard'
import TeknicHero from '../components/Teknic/TeknicHero'
import { teknicCardData, teknicHeros } from '../data/teknic'
import { useState } from 'react'


export default function Featurette({ cards, heros }) {

  const [selectedTab, setSelectedTab] = useState(1)

  const tabClick = (id) => {
    setSelectedTab(id)
  }

  return (
    <div className="">
      <div className="px-40 py-16">
        <div className='bg-white'>
          <TeknicHero heros={heros} selected={selectedTab} onChange={tabClick} />
          <TeknicCard cards={cards} onChange={tabClick} selected={selectedTab} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  return {
    props: {
      cards: teknicCardData,
      heros: teknicHeros,
    },
    revalidate: 10,
  }
}