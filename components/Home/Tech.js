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
      setSliderStyle({ transform: `translateX(${(getJamIndex(selected) * -100)+(50-(getJamIndex(selected)*(50/(jams.length-1))))}%)`})
  },[selected])

  return (
    <div className="py-16 w-full h-full overflow-x-hidden mt-6">
      <div className="flex">
          {
            jams.map((jam) => (
              <div key={jam.id} className={`w-[50%] flex-shrink-0 mx-6 flex-grow-0 transition-transform duration-1000`} style={sliderStyle}>
                <div className={`rounded-2xl bg-gray-800 text-white h-full pt-8 pb-10 px-10 ${selected === jam.id ? "scale-[110%] shadow-xl" : ""}`}>
                <Image src={`${jam.altImg ? jam.altImg : jam.img}`} width={jam.width} height={jam.height} />
                  <h4 className="text-lg text-gray-400 mt-2 leading-6"><span className={`font-bold ${jam.altTextColor ? "text-white" : jam.textColor}`}>{jam.title}</span> is a {jam.subtitle}</h4>
                  <p className="mt-4 mb-10 text-sm leading-5">{jam.body}</p>
                  <div className="">
                    <Link href={`${jam.url}`}><a target="_blank" className={`rounded-full w-52 text-white ${jam.buttonColor} px-6 py-3 shadow-md hover:shadow-lg ${jam.shadowColor}`}>Learn More</a></Link>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )

}

/* <>
      {
        jams.map((jam) => (
          <div key={jam.id} className={`${selected === jam.id ? "" : "hidden"} max-w-xl mx-auto mt-12`}>
            <div className="card py-10 px-10">
              <h3 className={`font-bold text-2xl ${jam.textColor}`}>{jam.title}</h3>
              <h4 className="text-lg text-gray-500 mt-2">{jam.subtitle}</h4>
              <p className="mt-6 mb-12">{jam.body}</p>
              <div className="">
                <Link href={`${jam.url}`}><a className={`rounded-full w-52 text-white ${jam.buttonColor} px-6 py-3 shadow-md hover:shadow-lg ${jam.shadowColor}`}>Learn More</a></Link>
              </div>
            </div>
          </div>
        ))
      }
    </> */