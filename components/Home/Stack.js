import Image from 'next/image'
import { useState } from 'react'
import Tech from './Tech'

export default function Stack({ jamStack }) {

  const colors = {
    'text-tailwindBlue': '#07b6d5',
    'text-javascriptYellow': '#f7df1e',
    'text-reactBlue': '#61dafb',
    'text-nextBlack': '#000000',
    'text-nodejsGreen': '#689f63',
    'text-graphqlPink': '#e535ab',
    'text-strapiPurple': '#9179ff',
    'border-tailwindBlue': '#07b6d5',
    'border-javascriptYellow': '#f7df1e',
    'border-reactBlue': '#61dafb',
    'border-nextBlack': '#000000',
    'border-nodejsGreen': '#689f63',
    'border-graphqlPink': '#e535ab',
    'border-strapiPurple': '#9179ff'
  }

  const [hoveredJam, setHoveredJam] = useState(null);
  const [selectedJam, setSelectedJam] = useState(jamStack[3].id);

  const setHover = (id) => {
    setHoveredJam(id)
  }

  const setClick = (id) => {
    setSelectedJam(id)
  }

  return (
    <div className="bg-white pt-36">
      <div className='sm:w-11/12 md:w-10/12 mx-auto'>
        <div className="text-center">
          <h2 className="text-6xl font-bold">My Jamstack</h2>
          <h3 className="text-xl mt-4">Click below to learn how each technology was used in developing this site</h3>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 place-content-center'>
          {
            jamStack.map((jam) => (
              <div key={jam.id} className={`h-full mt-20 hover:scale-110 hover:cursor-pointer transition duration-500 ease-in-out w-full text-center ${jam.textColor}`} onMouseOver={() => setHover(jam.id)} onMouseOut={() => setHover(null)}>
                <div onClick={() => setClick(jam.id)}>
                  <Image src={jam.img} width={jam.width} height={jam.height} className="" />
                  <p className={`text-center font-bold mt-1 mb-4`}>{jam.tech}</p>
                  <div className={`w-3/4 mx-auto ${selectedJam === jam.id ? "border-b-4 " + jam.borderColor : ""} ${hoveredJam === jam.id ? "border-b-4 " + jam.borderColor : ""}`}></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Tech selected={selectedJam} jams={jamStack} />
    </div>
  )
}


