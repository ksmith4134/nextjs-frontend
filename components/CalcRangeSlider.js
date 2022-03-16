import { useState } from 'react'
import RangeSlider from './RangeSlider'

export default function CalcSlider(props) {

  const {
    title = "Range slider title",
    description = "This is some description text. Lorem ipsum magna cillum pariatur consequat officia exercitation ullamco dolore in dolore.",
    min = 0,
    max = 10,
    step = 0.5,
    startPosMid = true,
    currency = false,
    onChange,
  } = props;

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const [sliderValue, setSliderValue] = useState(startPosMid ? ((max-min)/2)+min : min)

  const handleClick2 = (value) => {
    setSliderValue(value)
    onChange(value)
  }

  return (
    <div className="w-3/12">
      <div className="py-2">
        <label htmlFor="customRange" className="font-semibold text-3xl">{title}</label>
        <p className="mt-2 text-sm">{description}</p>
        <div className="flex mt-6 items-center">
          <span className="pr-2 text-lg">{currency ? formatter.format(min) : min}</span>
            <RangeSlider min={min} max={max} step={step} value={startPosMid ? ((max-min)/2)+min : min} classes={"flex w-full"} handleClick1={(value) => handleClick2(value)}  />
          <span className="pl-2 text-lg">{currency ? formatter.format(max) : max}</span>
        </div>
        <div>
          <p className='mt-6 text-xl'>Current value: <span className='font-bold'>{currency ? formatter.format(sliderValue) : sliderValue}</span></p>
        </div>
      </div>
    </div>
  )
}
