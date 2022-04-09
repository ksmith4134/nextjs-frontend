

export default function Tab(props) {

  const {
    label,
    id,
    tabClick,
    active
  } = props

  const handleClick = () => {
    tabClick(id)
  }

  return (
    <div onClick={handleClick} className={`flex-1 mx-1 px-3 py-4 rounded-full hover:cursor-pointer hover:text-blue-500 ${active ? "bg-white" : ""}`}>
      <p className="font-bold">{label}</p>
    </div>
  )
}
