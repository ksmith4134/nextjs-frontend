import { InsertImage } from '../Shared/InsertImage'

export default function TeknicCard(props) {

  const {
    cards,
    onChange,
    selected,
  } = props

  const selectTab = (id) => {
    onChange(id)
  }

  return (
    <div className='mt-6 pt-6 flex flex-row gap-6 h-full justify-center'>
      {/* {
        cards.map((tek) => (
          <div key={tek.id} className={`flex card p-2 border-2 place-items-center hover:shadow-xl hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110 ${selected === tek.id ? "border-teknic-blue" : "border-gray-100"}`} onClick={() => selectTab(tek.id)}>
            <div className='flex-none'>
              {tek.imgURL && InsertImage(tek.imgURL, 80, 80, "", "fixed", "rounded-xl")}
            </div>
            <div className='px-4'>
              <h4 className='font-bold text-teknic-blue'>{tek.title}</h4>
              <p>{tek.subtitle}</p>
            </div>
          </div>
        ))
      } */}
      {
        cards.map((card) => (
          <div key={card.id}>
            {card.attributes.Show === true && (
              <div className={`flex card p-2 border-2 place-items-center hover:shadow-xl hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110 ${selected === parseInt(card.id) ? "border-teknic-blue" : "border-gray-100"}`} onClick={() => selectTab(card.id)}>
                <div className='flex-none'>
                  {card.attributes.icon.media.data.attributes.url && InsertImage(card.attributes.icon.media.data.attributes.url, card.attributes.icon.width, card.attributes.icon.height, card.attributes.icon.alt, card.attributes.icon.layout, card.attributes.icon.styles)}
                </div>
                <div className='px-4'>
                  <h4 className='font-bold text-teknic-blue'>{card.attributes.title}</h4>
                  <p>{card.attributes.subtitle}</p>
                </div>
              </div>
            )}
          </div>
        ))
      }
    </div>
  )
}
