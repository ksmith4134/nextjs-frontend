import Image from 'next/image'

export default function Header() {
  return (
    <div className="bg-white">
      <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
        <div className='mx-auto text-center pt-12'>          
          <div className='rounded-full bg-teknic-blue text-white text-xl font-semibold w-52 text-center mx-auto py-2'>
            ClearPath
          </div>
          <h1 className="text-center text-6xl font-bold mt-6">Machine Control Designed for OEMs</h1>
          <h2 className="text-center text-xl mt-4">Integrated brushless servo motors, controllers, power supplies, and accessories</h2>
          <div className='mt-16 relative z-10'>
            <Image src="/teknic-product-family.png" width={1000} height={526} /> {/* 1.901, 1000x526 */}
          </div>
        </div>
      </div>
    </div>
  )
}
