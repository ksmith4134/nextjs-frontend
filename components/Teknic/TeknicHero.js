import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InsertImage } from '../Shared/InsertImage'

export default function TeknicHero(props) {

  const {
    heros,
    selected,
    onChange,
  } = props

  const selectHome = (id) => {
    onChange(id)
  }

  return (
    <>
      {
        heros.map((hero) => (
          <div key={hero.id} className={`grid sm:grid-cols-1 lg:grid-cols-2 place-items-center mt-12 px-16 ${selected == hero.featureRelation.teknic_feature.data.id ? "" : "hidden"} `}>
            <div className="order-last px-4 mt-4">
              <div className={`font-fancy text-teknic-blue text-6xl text-center lg:text-left ${hero.content.styles}`}>
                {hero.brandMedia && (
                  InsertImage(hero.brandMedia.media.data.attributes.url, hero.brandMedia.width, hero.brandMedia.height, hero.brandMedia.alt, hero.brandMedia.layout, hero.brandMedia.styles)
                )}
                <span className='px-2'>{hero.content.title}</span>
              </div>
              <h3 className="mt-8 font-semibold text-4xl">{hero.content.subtitle}</h3>
              <p className="mt-6 text-lg">{hero.content.description}</p>
              {/* {hero.homeURL && (
                <div className='mt-4' onClick={() => selectHome("1")}>
                  <span className="text-blue-600 text-lg hover:font-bold hover:cursor-pointer">
                    Home&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              )} */}
              <div className='rounded-full bg-amber-400 text-white text-md font-semibold w-40 text-center py-4 mt-8 hover:shadow-lg hover:shadow-amber-400/50 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110'>
                Learn more&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className='mt-4'>
              {hero.heroMedia && (
                InsertImage(hero.heroMedia.media.data.attributes.url, hero.heroMedia.width, hero.heroMedia.height, hero.heroMedia.alt, hero.heroMedia.layout, hero.heroMedia.styles)
              )}
            </div>
          </div>
        ))
      }
    </>
    
  )
}
