import Tab from './Tab'

export default function TabBar(props) {

  const {
    tabs,
    selected,
    onChange,
  } = props

  const tabClick = (id) => {
    onChange(id)
  }

  return (
    <div className='py-1 bg-gray-200 rounded-full'>
      <div className="flex text-lg">
        {
          tabs.map((tab) => (
            <Tab key={tab.id} id={tab.id} label={tab.attributes.Framework} active={selected === tab.id} tabClick={()=>{tabClick(tab.id)}} />
          ))
        }
      </div>
    </div>
  )
}
