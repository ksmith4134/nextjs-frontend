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
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols lg:grid-cols-4 place-items-center mt-12'>
      {
        cards.map((card) => (
          <div key={card.id} className="w-full p-3">
            {card.attributes.Show === true && (
              <div className={`flex place-items-center card p-2 h-full border-2 hover:shadow-xl hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110 ${selected === card.id ? "border-teknic-blue" : "border-gray-200"}`} onClick={() => selectTab(card.id)}>
                <div className='px-2'>
                  {card.attributes.icon.media.data.attributes.url && InsertImage(card.attributes.icon.media.data.attributes.url, card.attributes.icon.width, card.attributes.icon.height, card.attributes.icon.alt, card.attributes.icon.layout, card.attributes.icon.styles)}
                </div>
                <div className='px-4'>
                  <h4 className='text-lg font-bold text-teknic-blue'>{card.attributes.title}</h4>
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
