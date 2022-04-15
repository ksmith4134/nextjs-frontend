import Image from 'next/image'

export default function Header() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-100 -z-10 py-16 md:py-0">
      <div className='w-11/12 md:w-8/12 px-4 mx-auto'>
        <div className='grid grid-cols-12 justify-items-center items-center'>
          <div className="move-text-up order-1 md:order-1 col-span-12 lg:col-span-7">
            <h1 className="text-8xl lg:text-6xl font-bold">
              <span className='h1-disappear text-black'>Not<br /></span>
              <span className='h1-gradient'>That Kevin Smith</span>
            </h1>
            <h2 className="text-3xl lg:text-2xl text-black mt-2">Web design and development portfolio</h2>
            <div className='gradient-shift text-md rounded-full mt-6 px-4 py-6 relative'>
              <div className='hide-text text-[18px] text-white absolute bottom-[23%] left-[11.5%]'>Not an Actor. Writer. Director. Etc.</div>
              <div className='show-text text-[18px] text-white absolute bottom-[23%] left-[13.5%]'>Just a guy from Upstate NY</div>
            </div>
          </div>
          <div className="order-2 md:order-2 col-span-12 lg:col-span-5 justify-self-center mt-10 md:my-10">
            <div className="bg-white rounded-full w-[330px] h-[330px] shadow-2xl z-0 relative">
              <div className='head-disappear mx-auto text-center absolute top-[4.5%] left-[4.5%] z-10'>
                <Image src="/kevin_smith_2.png" width={300} height={300} />
              </div>
              <div className='absolute top-[4.5%] left-[4.5%] z-10 head-appear'>
                <Image src="/me_6.png" width={300} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}