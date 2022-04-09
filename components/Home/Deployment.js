import Image from 'next/image'
import { faFolder, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Deployment() {
  return (
    <div className="bg-gray-100 py-24">
      <div className='sm:w-11/12 md:w-10/12 mx-auto'>
        <div className="text-center">
          <h2 className="text-4xl font-bold">Deployment</h2>
          <h3 className="text-xl mt-4">Click below to learn how each technology was used in developing this site</h3>
        </div>

        <div className="card shadow-2xl w-1/4 mx-auto mt-12 py-5 relative z-10">
          <div className="flex justify-center items-center">
            <div className="">
              <Image src="/github_octokitty.svg" width={40} height={40} />
            </div>&nbsp;
            <Image src="/github.svg" width={80} height={40} />
          </div>
          <div className="flex justify-center items-center px-8 mt-4">
            <FontAwesomeIcon icon={faFolder} className="text-2xl text-[#ffca58]" />
            <h3 className="text-[#000000] text-lg pl-2">Frontend Files</h3>
          </div>
          <div className="flex justify-center items-center px-8 mt-2">
            <FontAwesomeIcon icon={faFolder} className="text-2xl text-[#ffca58]" />
            <h3 className="text-[#000000] text-lg pl-2">Backend Files</h3>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center -mt-6 z-0'>
          <div className="w-3/4 h-full">
            <div className="text-center card px-6 py-6 h-full">
              <h3 className="text-2xl text-gray-400">Frontend</h3>
              <div className="mt-4">
                <Image src="/vercel.svg" width={180} height={80} />
                <p>The frontend of this site consists of a NEXT.js project styled using Tailwind CSS. These files are deployed directly from GitHub using Vercel's CDN network.</p>
              </div>
            </div>
          </div>

          <div className="w-3/4 h-full">
            <div className="text-center card px-6 py-6 h-full">
              <h3 className="text-2xl text-gray-400">Backend</h3>
              <div className="flex place-items-center justify-center mt-4">
                <Image src="/heroku.svg" width={180} height={80} />
                <div className="px-4 text-2xl">+</div>
                <Image src="/postgresql.svg" width={70} height={60} />
              </div>
              <p>The backend of this site is deployed using Heroku and PostgreSQL. The content is managed using the Strapi headless CMS (with the GraphQL plugin) and Cloudinary image hosting.</p>
            </div>
          </div>

          {/* <div className="card w-3/4 text-center mt-6 px-2 py-6 h-full">
            <h3 className="text-center text-[#000000] text-2xl">Backend</h3>
            <div className="flex place-items-center justify-center">
              <Image src="/heroku.svg" width={180} height={100} />
              <div className="px-4 text-2xl">+</div>
              <Image src="/postgresql.svg" width={70} height={70} />
            </div>
            <p>The backend of this site was deployed using Heroku and PostgreSQL</p>
          </div> */}

        </div>
      </div>
    </div>
  )
}
