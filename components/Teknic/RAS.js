import Image from 'next/image'

export default function RAS() {
  return (
    <>
      <div className='grid grid-cols-3 justify-between text-center relative'>
        <div className='transition duration-500 ease-in-out hover:scale-110'>
          <div className='rounded-full bg-gradient-to-br from-gray-200 to-gray-400 w-[100px] h-[100px] mx-auto relative z-0'></div>
          <div className='relative z-10 -top-[74px] -left-[14px]'>
            <Image src="/none.png" width={85} height={79} />
          </div>
          <div className='text-gray-400 font-semibold text-2xl leading-7 mt-2 relative -top-[80px]'>No<br />smoothing</div>
        </div>
        <div className='transition duration-500 ease-in-out hover:scale-110'>
          <div className='rounded-full bg-gradient-to-br from-gray-300 to-gray-600 w-[100px] h-[100px] mx-auto relative z-0'></div>
          <div className='relative z-10 -top-[64px] -left-[6px]'>
            <Image src="/jerk.png" width={95} height={61} />
          </div>
          <div className='text-gray-500 font-semibold text-2xl leading-7 mt-2 relative -top-[62px]'>Jerk-<br />limited</div>
        </div>
        <div className='transition duration-500 ease-in-out hover:scale-110'>
          <div className='rounded-full bg-gradient-to-br from-[#54baff] to-teknic-blue w-[100px] h-[100px] mx-auto relative z-0'></div>
          <div className='relative z-10 -top-[64px] -left-[6px]'>
            <Image src="/ras.png" width={95} height={61} />
          </div>
          <div className='text-teknic-blue font-bold text-2xl leading-7 mt-2 relative -top-[62px]'>Teknic<br />RAS</div>
        </div>
      </div>
      <div className='text-center text-md text-[#9b9b9b] font-semibold mt-6 italic relative -top-[80px]'>* Torque inflection points</div>
    </>
  )
}
