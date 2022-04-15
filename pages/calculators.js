import CalcRangeSlider from "../components/Calculator/CalcRangeSlider";
import { useState } from 'react'
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
      <div className="bg-gradient-to-b from-white to-gray-200 h-full">
        <div className="w-10/12 mx-auto pt-28">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400">Breakeven Calculator</h2>
            <p className="mt-6 text-center text-xl text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro ipsum iste earum nesciunt tempore praesentium temporibus dignissimos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 text-gray-800 mt-16">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-500/10 shadow-md shadow-gray-500/50">
              <CalcRangeSlider title={"Unit sales price"} description={"This is some description text. Lorem ipsum magna cillum pariatur consequat officia exercitation ullamco dolore."} min={0} max={100} step={1} startPosMid={false} currency={true} onChange={unitSalesPrice} />
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-500/10 shadow-md shadow-gray-500/50">
              <CalcRangeSlider title={"Fixed costs"} description={"This is some description text. Lorem ipsum magna cillum pariatur consequat officia exercitation ullamco dolore."} min={0} max={100} step={1} startPosMid={false} currency={true} onChange={fixedCosts} />
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-500/10 shadow-md shadow-gray-500/50">
              <CalcRangeSlider title={"Variable costs"} description={"This is some description text. Lorem ipsum magna cillum pariatur consequat officia exercitation ullamco dolore."} min={0} max={100} step={1} startPosMid={false} currency={true} onChange={variableCosts} />
            </div>
          </div>
          <div className="pt-20 pb-32">
            <div className="flex mx-auto items-center max-w-[300px] rounded-xl p-6 bg-gradient-to-r from-teal-300 to-cyan-400  shadow-lg shadow-cyan-500/20 text-white">
              <div className="flex justify-evenly items-center w-full">
                <h2 className="text-3xl font-bold">Breakeven</h2>
                <span className="text-3xl">{isNaN(fcValue/(uspValue-vcValue)) ? ("") : (isFinite(fcValue/(uspValue-vcValue)) ? (fcValue/(uspValue-vcValue)).toFixed(1) : "" )}</span>
              </div>
            </div>
            <div className="text-3xl text-gray-600 text-center mx-auto mt-4">
              <FontAwesomeIcon data-tip data-for="unitsTip" icon={faCircleQuestion} className="" />
              <ReactTooltip id="unitsTip" place="top" effect="solid" className="bg-black text-white">
                Units are time-based. For example, if your fixed and variable costs are measured over 1 month, the calculator shows how many months to breakeven.
              </ReactTooltip>
            </div>
          </div>
        </div>
      </div>
  )
}


/* 
<div className="px-20 mt-20">
  <div className="card px-4 py-4 bg-gray-50">
    <div className="flex justify-between items-center gap-2">
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
*/