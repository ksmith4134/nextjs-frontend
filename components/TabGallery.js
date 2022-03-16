import TabBar from './TabBar'
import CardSlider from './CardSlider'
import { useState, useEffect } from 'react'

export default function TabGallery(props) {

  const {
    tabs,
    posts,
    heading = "This is a modular tab gallery",
    subHeading ="Anim dolor pariatur irure commodo ullamco proident magna consectetur. Ullamco voluptate minim culpa eiusmod aliquip cupidatat aute minim cupidatat elit culpa mollit dolore est. Anim ut occaecat irure minim.",
  } = props

  const [selectedTab, setSelectedTab] = useState(1)

  const tabChange = (id) => {
    setSelectedTab(id)
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-3xl font-bold">{heading}</h2>
        <p className="mt-6 text-center text-lg">{subHeading}</p>
      </div>
      <div className="max-w-2xl mx-auto px-8 text-center mt-12">
        <TabBar tabs={tabs} onChange={tabChange} selected={selectedTab}/>
      </div>
      <div className='max-w-4xl mx-auto px-8 flex'>
        <CardSlider posts={posts} selected={selectedTab} />
      </div>
    </div>
  )
}


