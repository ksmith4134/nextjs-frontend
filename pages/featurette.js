import { getTeknicFeatures, getTeknicHomepage } from '../lib/api'
import Header from '../components/Teknic/Header'
import PoweredBy from '../components/Teknic/PoweredBy'
import Products from '../components/Teknic/Products'
import ReviewSlider from '../components/Teknic/ReviewSlider'
import Innovation from '../components/Teknic/Innovation'
import Architectures from '../components/Teknic/Architectures'
import Footer from '../components/Teknic/Footer'

export default function Featurette({ heros, cards }) {
  return (
    <div className='mt-6'>
      <Header />
      <PoweredBy />
      <Products heros={heros} cards={cards} />
      <ReviewSlider />
      <Innovation />
      <Architectures />
      <Footer />
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
    },
    /* revalidate: 10, */
  }
}