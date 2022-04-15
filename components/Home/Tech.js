import Link from 'next/link'
/* import { backgroundColor } from 'tailwindcss/defaultTheme' */
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Tech({ selected, jams }) {
  
  const colors = {
    'text-tailwindBlue': '#07b6d5',
    'text-javascriptYellow': '#f7df1e',
    'text-reactBlue': '#61dafb',
    'text-nextBlack': '#000000',
    'text-nodejsGreen': '#689f63',
    'text-graphqlPink': '#e535ab',
    'text-strapiPurple': '#9179ff',
    'bg-tailwindBlue': '#07b6d5',
    'bg-javascriptYellow': '#f7df1e',
    'bg-reactBlue': '#61dafb',
    'bg-nextBlack': '#000000',
    'bg-nodejsGreen': '#689f63',
    'bg-graphqlPink': '#e535ab',
    'bg-strapiPurple': '#9179ff',
    'shadow-tailwindBlue': '#07b6d5',
    'shadow-javascriptYellow': '#f7df1e',
    'shadow-reactBlue': '#61dafb',
    'shadow-nextBlack': '#000000',
    'shadow-nodejsGreen': '#689f63',
    'shadow-graphqlPink': '#e535ab',
    'shadow-strapiPurple': '#9179ff'
  }

  const [sliderStyle, setSliderStyle] = useState({ transform: "translateX(0)"})

  useEffect(() => {
      const getJamIndex = (selected) => {
          let index = jams.findIndex((jam) => {
              return (jam.id === selected)
          })
          if(index < 0){ index = 0}
          return index;
      }
      setSliderStyle({ transform: `translateX(${(getJamIndex(selected) * -100)+(60-(getJamIndex(selected)*(60/(jams.length-1))))}%)`})
  }, [selected])

  return (
    <div className="py-16 mx-auto w-full h-full overflow-x-hidden mt-6">
      <div className="flex gap-4">
          {
            jams.map((jam) => (
              <div key={jam.id} className={`w-[45%] flex-shrink-0 mx-6 flex-grow-0 transition-transform duration-1000`} style={sliderStyle}>
                <div className={`rounded-2xl bg-white text-black h-full pt-6 pb-10 px-10 ${selected === jam.id ? "scale-[110%] border-2 border-gray-50 shadow-xl" : ""}`}>
                  <Image src={`${jam.altImg ? jam.img : jam.img}`} width={jam.width} height={jam.height} />
                  <h4 className="text-lg text-gray-400 mt-2 leading-6"><span className={`font-bold ${jam.altTextColor ? "text-black" : jam.textColor}`}>{jam.title}</span> is a {jam.subtitle}</h4>
                  <p className="mt-4 mb-10 text-sm leading-5">{jam.body}</p>
                  <Link href={`${jam.url}`}><a target="_blank" className={`rounded-full w-52 text-white ${jam.buttonColor} px-6 py-3 shadow-md hover:shadow-lg ${jam.shadowColor}`}>Learn More</a></Link>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}