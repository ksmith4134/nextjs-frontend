import Image from 'next/image'

export default function Architectures() {
  return (
    <div className="bg-gray-100 pb-36">
        <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
          <div className='mx-auto text-center pt-36 pb-4 relative'> 
            <div className='relative z-10'>
              <div className='rounded-full bg-teknic-blue text-white text-xl font-semibold w-60 text-center mx-auto py-2'>
                Control Architectures
              </div>
              <h1 className="text-6xl font-bold text-gray-800 mt-6">Sophisticated motion. Fractional cost.</h1>
              <h2 className="text-xl mt-4">Check out an example layout to see how our customers control their machines</h2>
            </div>
            <div className='card py-4 mt-24 relative'>
              <Image src="/clearcore-schematic.svg" width={2000} height={1100} />
              <span className='absolute top-[18.45%] left-[76.5%]'>
                <Image src="/barcode.png" width={40} height={40} />
              </span>
            </div>
            {/* <div className='card py-4 mt-24 relative z-0'>
              <span className=''>
                <Image src="/clearcore-large-system-schematic_1.svg" width={3000} height={3000} />
              </span>
              <span className='absolute top-[22.2%] left-[44.5%]'>
                <Image src="/raspberrypi.png" width={132} height={200} />
              </span>
              <div className='absolute top-[27.5%] left-[76%] -rotate-90 -z-10'>
                <Image src="/ccio.png" width={166} height={180} />
              </div>
              <span className='absolute top-[22.5%] left-[19.1%]'>
                <Image src="/microchip.png" width={105} height={77} />
              </span>
              <span className='absolute top-[31%] left-[32.1%]'>
                <Image src="/shadow.png" width={77} height={18} />
              </span>
            </div> */}
          </div>
        </div>
      </div>
  )
}
