import TeknicCard from '../components/Teknic/TeknicCard'
import TeknicHero from '../components/Teknic/TeknicHero'
import { teknicCardData, teknicHeros } from '../data/teknic'
import { getTeknicFeatures, getTeknicHomepage } from '../lib/api'
import { useState } from 'react'

export default function Featurette({ heros, cards }) {

  const [selectedTab, setSelectedTab] = useState("6")

  const tabClick = (id) => {
    setSelectedTab(id)
  }

  console.log(heros)

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
  const allFeatures = await getTeknicFeatures()
  const homepage = await getTeknicHomepage()
  return {
    props: {
      cards: allFeatures.data,
      heros: homepage.data.attributes.Heros,
      /* localHeros: teknicHeros,
      localCards: teknicCardData, */
    },
    revalidate: 10,
  }
}