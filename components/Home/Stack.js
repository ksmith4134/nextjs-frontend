import Image from 'next/image'

export default function Stack() {
  return (
    <div className="bg-white mb-10">
      <div className='sm:w-11/12 md:w-10/12 mx-auto'>
        {/* <div className="text-center">
          <h2 className="text-4xl font-bold">Jamstack</h2>
          <h3 className="text-xl mt-4">Click below to learn how each technology was used in developing this site</h3>
        </div> */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 justify-items-center items-end mt-4'>
          <div className="mt-6 hover:cursor-pointer transition duration-500 ease-in-out hover:scale-125">
            <Image src="/tailwind.svg" width={80} height={70} />
            <p className="text-center text-[#07B6D5] font-bold">Tailwind</p>
          </div>
          <div className="mt-6 hover:cursor-pointer transition duration-500 ease-in-out hover:scale-125">
            <Image src="/javascript.svg" width={80} height={70} />
            <p className="text-center text-[#F7DF1E] font-bold">JavaScript</p>
          </div>
          <div className="mt-6 hover:cursor-pointer transition duration-500 ease-in-out hover:scale-125">
            <Image src="/react.svg" width={85} height={70} />
            <p className="text-center text-[#61DAFB] font-bold">React</p>
          </div>
          <div className="mt-6 hover:cursor-pointer transition duration-500 ease-in-out hover:scale-125">
            <Image src="/nextjs.svg" width={200} height={80} />
            <p className="text-center text-[#000000] font-bold">React Framework</p>
          </div>
          <div className="mt-6 hover:cursor-pointer transition duration-500 ease-in-out hover:scale-125">
            <Image src="/nodejs.svg" width={200} height={80} />
            <p className="text-center text-[#689F63] font-bold">NodeJS</p>
          </div>
          <div className="mt-6 hover:cursor-pointer transition duration-500 ease-in-out hover:scale-125">
            <Image src="/graphql.svg" width={70} height={70} />
            <p className="text-center text-[#E535AB] font-bold">GraphQL</p>
          </div>
          <div className="mt-6 hover:cursor-pointer transition duration-500 ease-in-out hover:scale-125">
            <Image src="/strapi.svg" width={150} height={70} />
            <p className="text-center text-[#9179FF] font-bold">Headless CMS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
