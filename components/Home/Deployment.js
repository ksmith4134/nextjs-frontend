import Image from 'next/image'
import { faFolder, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Deployment() {
  return (
    <div className="bg-gray-100 py-24">
      <div className='sm:w-11/12 md:w-10/12 mx-auto'>
        <div className="text-center max-w-2xl mx-auto">
          <Image src="/github_octokitty.svg" width={90} height={90} />
          <h2 className="text-5xl font-bold">Deployed Using GitHub</h2>
          <h3 className="text-xl mt-4">Two GitHub repositories were used in the making of this site - one for the NEXT.js frontend, and one for the Strapi backend.</h3>
        </div>

        <div className='grid grid-cols-12 place-items-center mt-12'>

          <div className="w-full h-full px-12 col-span-12 md:col-span-6">
            <div className="flex justify-center items-center mt-4">
              <FontAwesomeIcon icon={faFolder} className="text-4xl text-[#ffca58]" />
              <h3 className="text-[#000000] text-2xl pl-3">Frontend Files</h3>
            </div>
            <div className="h-full lg:h-3/4 text-center card p-12 mt-6">
              <div className="">
                <Image src="/vercel.svg" width={202.5} height={45} />
                <p className="mt-6">The frontend of this site consists of a NEXT.js project styled using Tailwind CSS. These files are deployed directly from GitHub using Vercel's CDN network.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full h-full px-12 col-span-12 md:col-span-6">
            <div className="flex justify-center items-center mt-4">
              <FontAwesomeIcon icon={faFolder} className="text-4xl text-[#ffca58]" />
              <h3 className="text-[#000000] text-2xl pl-3">Backend Files</h3>
            </div>
            <div className="h-full lg:h-3/4 text-center card p-12 mt-6">
              <div className="flex place-items-center justify-center">
                <Image src="/heroku.svg" width={160.5} height={45} />
                <div className="px-4 text-2xl">+</div>
                <Image src="/postgresql.svg" width={45} height={45} />
              </div>
              <p className="mt-6">The backend of this site is deployed using Heroku and PostgreSQL. Content is managed using Strapi (headless CMS) and Cloudinary image hosting.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
