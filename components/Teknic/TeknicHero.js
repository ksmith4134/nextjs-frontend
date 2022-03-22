import Image from 'next/image'
import Link from 'next/link'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TeknicHero(props) {

  const {
    heros,
  } = props
  
  return (
    <>
      {
        heros.map((hero) => (
          <div key={hero.series} className="grid grid-cols-2 gap-8 place-items-center">
            <div>
              <div className='font-fancy text-teknic-blue text-6xl '>
                <Image src={hero.brandImgURL} width={89} height={73} />
                {hero.product}-<span className="font-extrabold">{hero.series}</span>
              </div>
              <h3 className="mt-8 font-semibold text-4xl">{hero.heading}</h3>
              <p className="mt-6 text-lg">{hero.description}</p>
              {/* <div className='mt-4'>
                <span className="text-blue-600 hover:font-bold text-lg">
                  <Link href={hero.webURL}><a>Learn more&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></a></Link>
                </span>
              </div> */}
            </div>
            <div>
              <Image src={hero.heroImgURL} width={600} height={450} />
            </div>
          </div>
        ))
      }
    </>
    
  )
}
