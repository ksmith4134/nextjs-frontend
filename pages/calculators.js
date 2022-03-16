import CalcRangeSlider from "../components/CalcRangeSlider";
import { useState, useEffect } from 'react'
import { ReactElement } from 'react'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from 'react-tooltip'

export default function Calculators() {

  const [fcValue, setFcValue] = useState(0)
  const [uspValue, setUspValue] = useState(0)
  const [vcValue, setVcValue] = useState(0)
  
  const fixedCosts = (fc) => {
    console.log(fc)
    setFcValue(fc)
  }
  
  const unitSalesPrice = (usp) => {
    console.log(usp)
    setUspValue(usp)
  }

  const variableCosts = (vc) => {
    console.log(vc)
    setVcValue(vc)
  }

  return (
    <div className="px-10">
      <div className="card px-4 py-4 bg-gray-50">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-3xl font-bold">Breakeven: <span className="font-semibold">{isNaN(fcValue/(uspValue-vcValue)) ? ("") : (isFinite(fcValue/(uspValue-vcValue)) ? (fcValue/(uspValue-vcValue)).toFixed(2) : "" )}</span></h2>
          <FontAwesomeIcon data-tip data-for="unitsTip" icon={faCircleQuestion} className="text-2xl text-gray-400" />
          <ReactTooltip id="unitsTip" place="top" effect="solid" className="bg-black text-white">
            Units are time-based. For example, if your fixed and variable costs are measured over 1 month, the calculator shows how many months to breakeven.
          </ReactTooltip>
        </div>
      </div>
      <div className="flex gap-12 p-4 mt-4">
        <CalcRangeSlider title={"Fixed costs"} description={"This is some description text. Lorem ipsum magna cillum pariatur consequat officia exercitation ullamco dolore in dolore."} min={0} max={100} step={1} startPosMid={false} currency={true} onChange={fixedCosts} />
        <CalcRangeSlider title={"Unit sales price"} description={"This is some description text. Lorem ipsum magna cillum pariatur consequat officia exercitation ullamco dolore in dolore."} min={0} max={100} step={1} startPosMid={false} currency={true} onChange={unitSalesPrice} />
        <CalcRangeSlider title={"Variable costs"} description={"This is some description text. Lorem ipsum magna cillum pariatur consequat officia exercitation ullamco dolore in dolore."} min={0} max={100} step={1} startPosMid={false} currency={true} onChange={variableCosts} />
    </div>
    </div>
    
  )
}
