import Image from 'next/image'

export default function Test() {
  return (
    <div className="bg-white h-full">
      <div className="sm:w-11/12 md:w-10/12 mx-auto px-4">
        {/* <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-6xl pb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via bg-purple-500 to-pink-500">Testing Sandbox</h2>
          <p className="mt-6 text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro ipsum iste earum nesciunt tempore praesentium temporibus dignissimos eum error hic voluptas consequuntur incidunt corporis.</p>
        </div> */}
        
        {/* <div className="flex flex-wrap-reverse items-center border-2 gap-10 mt-12">
          <div className="flex-1">
            <h2 className="font-bold text-4xl pb-4">ClearPath</h2>
            <p>ClearPath all-in-one servo systems were designed with the understanding that ease-of-use shouldn't come at the expense of programmability. That's why ClearPath is available with three distinct digital control methods and two firmware packages, making it as basic or advanced as the application calls for.</p>
          </div>
          <div className="flex-none">
            <Image src="https://res.cloudinary.com/dpgvdl0wt/image/upload/v1647875477/teknic-clearpath-1_qiagas.png" width={500} height={375} />
          </div>
        </div> */}


        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols lg:grid-cols-4 gap-8 border-2 mt-12">
          <div className="bg-gray-400 rounded-2xl h-20"></div>
          <div className="bg-gray-400 rounded-2xl h-20"></div>
          <div className="bg-gray-400 rounded-2xl h-20"></div>
          <div className="bg-gray-400 rounded-2xl h-20"></div>
        </div>


        <div className="grid sm:grid-cols-1 lg:grid-cols-2 place-items-center border-2 gap-6 mt-12"> {/* sm:grid-cols-1 md:grid-cols-2 */}
          <div className="sm:order-last lg:order-first order-last">
            <h2 className="font-fancy text-teknic-blue text-6xl">ClearPath</h2>
            <h4 className='mt-8 font-semibold text-4xl'>High-performance, fully integrated, brushless servo motor systems</h4>
            <p className='mt-6'>ClearPath all-in-one servo systems were designed with the understanding that ease-of-use shouldn't come at the expense of programmability. That's why ClearPath is available with three distinct digital control methods and two firmware packages, making it as basic or advanced as the application calls for.</p>
          </div>
          <div>
            <Image src="https://res.cloudinary.com/dpgvdl0wt/image/upload/v1647875477/teknic-clearpath-1_qiagas.png" width={500} height={375} className="" />
            {/* <iframe width="600" height="300" className="w-full aspect-video rounded-2xl" src="https://www.youtube.com/embed/Aj1LyYEvstw" title="YouTube video player" frameborder="0"></iframe> */}
          </div>
        </div>
        
        
      </div>
    </div>
  )
}
