import Image from 'next/image'

export default function Header() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 -z-10 py-10">
      <div className='sm:w-11/12 md:w-9/12 mx-auto px-4'>
        <div className='grid grid-cols-12 justify-items-start items-center'>

          <div className="order-1 col-span-7">
            <div className="relative">
              <h1 className='text-6xl font-bold'>
                <span className='h1-disappear text-black'>Not </span>
                <span className='h1-gradient'>That Kevin Smith</span>
              </h1>
            </div>
            <h2 className="text-2xl text-black mt-2">Web design and development portfolio</h2>
            <div className='gradient-shift text-md rounded-full mt-4 px-4 py-6 relative'>
              <div className='hide-text text-white absolute bottom-[28%] left-[13.5%]'>Not an actor, writer, or director</div>
              <div className='show-text text-white absolute bottom-[28%] left-[11.5%]'>Just a guy from Upstate NY</div>
            </div>
          </div>

          <div className="order-2 col-span-5 justify-self-center ml-8">
            <div className="bg-white rounded-full w-[330px] h-[330px] shadow-2xl z-0 relative">
              <div className='mx-auto text-center absolute top-[8%] left-[15%] z-10 head-disappear'>
                <Image src="/head-neck.png" width={230} height={282} />
              </div>
              <div className='absolute top-[5%] left-[20%] z-10 head-appear'>
                <Image src="/me-head-only_2.png" width={200} height={304} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}