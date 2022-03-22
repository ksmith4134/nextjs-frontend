import TeknicCard from '../components/Teknic/TeknicCard'
import TeknicHero from '../components/Teknic/TeknicHero'
import { teknicCardData, teknicHomeHero } from '../data/teknic'

export default function Featurette({ cards, heros }) {
  return (
    <div className="">
      <div className="px-40 py-16">
        <div className='bg-white'>
          <TeknicHero heros={heros} />
          <TeknicCard cards={cards} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  return {
    props: {
      cards: teknicCardData,
      heros: teknicHomeHero,
    },
    revalidate: 10,
  }
}