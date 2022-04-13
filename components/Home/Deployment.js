import Image from 'next/image'
import Link from 'next/link'
import { faFolder, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Deployment() {
  return (
    <div className="bg-white py-24">
      <div className='sm:w-11/12 md:w-10/12 mx-auto'>
        <div className="text-center max-w-2xl mx-auto">
          <Image src="/github_octokitty_purple.svg" width={100} height={100} />
          <h2 className="text-5xl font-bold pb-2 mt-2">Deployed Using GitHub</h2>{/* bg-clip-text text-transparent bg-gradient-to-br from-[#ee00ff] to-[#620169] */}
          <h3 className="text-xl mt-2">Two GitHub repositories were used in the making of this site - one for the NEXT.js frontend, and one for the Strapi backend.</h3>
        </div>

        <div className='grid grid-cols-12 place-items-center mt-12'>

          <div className="w-full h-full px-12 col-span-12 md:col-span-6">
            <div className="flex justify-center items-center mt-4">
              <FontAwesomeIcon icon={faFolder} className="text-4xl text-[#ffca58]" />
              <h3 className="text-[#000000] text-2xl pl-3">Frontend Files</h3>
            </div>
            <div className="h-full lg:h-3/4 text-center card border-2 border-gray-50 px-12 py-12 mt-6">
              <div>
                <Image src="/vercel.svg" width={160} height={45} />
                <p className="mt-8">The frontend of this site consists of a NEXT.js project styled using Tailwind CSS. These files are deployed directly from GitHub using Vercel's CDN network.</p>
              </div>
              <div className="mt-6 text-blue-500 underline underline-offset-2">
                <Link href="https://github.com/ksmith4134/nextjs-frontend"><a target="_blank">GitHub Repository</a></Link>
              </div>
            </div>
          </div>
          
          <div className="w-full h-full px-12 col-span-12 md:col-span-6">
            <div className="flex justify-center items-center mt-4">
              <FontAwesomeIcon icon={faFolder} className="text-4xl text-[#ffca58]" />
              <h3 className="text-[#000000] text-2xl pl-3">Backend Files</h3>
            </div>
            <div className="h-full lg:h-3/4 text-center card border-2 border-gray-50 px-12 py-12 mt-6">
              <div className="flex place-items-center justify-center">
                <Image src="/heroku.svg" width={160.5} height={45} />
                <div className="px-4 text-2xl">+</div>
                <Image src="/postgresql.svg" width={45} height={45} />
              </div>
              <p className="mt-8">The backend of this site is deployed using Heroku and PostgreSQL. Content is managed using Strapi (headless CMS) and Cloudinary image hosting.</p>
              <div className="mt-6 text-blue-500 underline underline-offset-2">
                <Link href="https://github.com/ksmith4134/strapi-headless-cms"><a target="_blank">GitHub Repository</a></Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
