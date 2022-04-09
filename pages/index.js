import Image from 'next/image'

export default function Home({ posts, categories}) {
  return (
    <div className="">
      <div className="bg-gray-100">
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4 pb-2'>
          <div className='grid grid-cols-12 place-items-center pt-24'>
            <div className="col-span-6 order-2">
              <div className='mx-auto text-center relative head-disappear z-10'>
                <Image src="/head-neck.png" width={245} height={300} /> {/* 0.8151 */}
              </div>
              <div className='absolute top-[14%] left-[62.5%] head-appear z-10'>
                <Image src="/me-head-only.png" width={245} height={405} /> {/* 0.6047 */}
              </div>
              <div className="bg-white rounded-full w-[400px] h-[400px] shadow-2xl z-0 absolute top-[16%] right-[17%]"></div>
            </div>
            <div className="col-span-6 order-1 relative -mt-12">
              <h1 className='text-6xl font-bold'>
                <span className='head-disappear'>Not </span>
                <span className='h1-gradient'>That Kevin Smith</span> {/*  bg-clip-text bg-gradient-to-r from-teal-500 via bg-sky-500 to-indigo-500 */}
              </h1>
              <h2 className="text-xl mt-2 absolute move-text-right">Kevin Smith's web design and development portfolio</h2>
            </div>
          </div>
          

          
          
        </div>
      </div>
    </div>
  )
}