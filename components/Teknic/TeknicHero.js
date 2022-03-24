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
          <div key={hero.id} className={`grid grid-cols-2 gap-8 place-items-center ${selected === parseInt(hero.featureRelation.id) ? "" : "hidden"} `}>
            <div>
              <div className={`font-fancy text-teknic-blue text-6xl ${hero.content.styles}`}>
                {hero.brandMedia && (
                  InsertImage(hero.brandMedia.media.data.attributes.url, hero.brandMedia.width, hero.brandMedia.height, hero.brandMedia.alt, hero.brandMedia.layout, hero.brandMedia.styles)
                )}
                {hero.content.title}
              </div>
              <h3 className="mt-8 font-semibold text-4xl">{hero.content.subtitle}</h3>
              <p className="mt-6 text-lg">{hero.content.description}</p>
              {hero.homeURL && (
                <div className='mt-4' onClick={() => selectHome("6")}>
                  <span className="text-blue-600 text-lg hover:font-bold hover:cursor-pointer">
                    Home&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              )}
            </div>
            <div>
              {hero.heroMedia && (
                InsertImage(hero.heroMedia.media.data.attributes.url, hero.heroMedia.width, hero.heroMedia.height, hero.heroMedia.alt, hero.heroMedia.layout, hero.heroMedia.styles)
              )}
            </div>
          </div>
        ))
      }
      {/* {
        heros.map((hero) => (
          <div key={hero.id} className={`grid grid-cols-2 gap-8 place-items-center ${selected === hero.id ? "" : "hidden"} `}>
            <div>
              <div className={`font-fancy text-teknic-blue text-6xl ${hero.titleStyles}`}>
                {hero.brandMedia && (
                  InsertImage(hero.brandMedia, hero.brandMediaWidth, hero.brandMediaHeight, "", "", "")
                )}
                {hero.title}
                {hero.series && (
                  <span className="font-extrabold">-{hero.series}</span>
                )}
              </div>
              <h3 className="mt-8 font-semibold text-4xl">{hero.subtitle}</h3>
              <p className="mt-6 text-lg">{hero.description}</p>
              {hero.homeURL && (
                <div className='mt-4' onClick={() => selectHome(10)}>
                  <span className="text-blue-600 text-lg hover:font-bold hover:cursor-pointer">
                    Home&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              )}
            </div>
            <div>
              {hero.heroMedia && (
                InsertImage(hero.heroMedia, hero.heroMediaWidth, hero.heroMediaHeight, "", "", "rounded-2xl")
              )}
            </div>
          </div>
        ))
      } */}
    </>
    
  )
}
