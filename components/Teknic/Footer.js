import Image from 'next/image'

export default function Footer() {
  return (
    <div className="bg-gray-200 pb-6">
      <div className='sm:w-11/12 md:w-10/12 mx-auto px-4'>
        <div className='text-center pt-6'>
          <Image src="/teknic-logo.svg" width={200} height={100} />
        </div>
      </div>
    </div>
  )
}
