import Deployment from '../components/Home/Deployment'
import Header from '../components/Home/Header'
import Stack from '../components/Home/Stack'
import { stack } from '../data/home'

export default function Home({ jamStack }) {

  return (
    <div>
      <Header />
      <Stack jamStack={jamStack} />
      <Deployment />
    </div>
  )
}

export async function getStaticProps () {
  return {
    props: {
      jamStack: stack
    }
  }
}