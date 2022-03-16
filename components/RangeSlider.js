

export default function RangeSlider(props) {

  const {
    min,
    max,
    step,
    value,
    handleClick1,
    classes,
  } = props

  const handleClick = (e) => {
    handleClick1(e.target.value)
  }

  return (
    <div className={classes}>
      <input
        type="range" id="customRange"
        className={`${classes} cursor-pointer appearance-none bg-gray-300 rounded-full h-2`}
        min={min} max={max} step={step}
        defaultValue={value}
        onClick={handleClick} onKeyUp={handleClick}
      />
    </div>
  )
}
