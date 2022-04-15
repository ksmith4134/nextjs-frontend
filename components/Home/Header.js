import Image from 'next/image'

export default function Header() {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 -z-10 py-16">
      <div className='w-11/12 md:w-8/12 px-4 mx-auto'>
        <div className='grid grid-cols-12 justify-items-start items-center'>
          <div className="move-text-up order-1 col-span-12 lg:col-span-7">
            <h1 className="text-8xl lg:text-6xl font-bold">
              <span className='h1-disappear text-black'>Not<br /></span>
              <span className='h1-gradient'>That Kevin Smith</span>
            </h1>
            <h2 className="text-3xl lg:text-2xl text-black mt-2">Web design and development portfolio</h2>
            <div className='gradient-shift text-md rounded-2xl mt-6 px-4 py-6 relative'>
              <div className='hide-text text-[18px] text-white absolute bottom-[23%] left-[9.5%]'>Talented Actor. Writer. Director. Etc.</div>
              <div className='show-text text-[18px] text-white absolute bottom-[23%] left-[13.3%]'>Just a guy from Upstate NY</div>
            </div>
          </div>
          <div className="order-2 col-span-12 lg:col-span-5 justify-self-center lg:justify-self-end mt-36 lg:my-10">
            <div className="bg-white border-2 border-gray-50 rounded-full w-[330px] h-[330px] shadow-2xl z-0 relative">
              <div className='head-disappear mx-auto text-center absolute top-[2.4%] left-[2.4%] z-10'>
                <Image src="/kevin_smith_2.png" width={310} height={310} />
              </div>
              <div className='absolute top-[2.4%] left-[2.4%] z-10 head-appear'>
                <Image src="/me_6.png" width={310} height={310} />
              </div>
              <div className='absolute -top-[14%] -left-[14.5%] head-appear'>
                <div id="img-spin-container">
                  <div className="img-spin shadow-lg"><Image src="/github_octokitty.svg" width={100} height={70} /></div>
                  <div className="img-spin shadow-lg"><Image src="/javascript_logo.svg" width={30} height={46} /></div>
                  <div className="img-spin shadow-lg"><Image src="/react.svg" width={100} height={70} /></div>
                  <div className="img-spin shadow-lg"><Image src="/nextjs_logo.svg" width={40} height={50} /></div>
                  <div className="img-spin shadow-lg"><Image src="/nodejs_logo.svg" width={100} height={70} /></div>
                  <div className="img-spin shadow-lg pr-1"><Image src="/strapi_logo.svg" width={100} height={70} /></div>
                  <div className="img-spin shadow-lg"><Image src="/graphql.svg" width={100} height={70} /></div>
                  <div className="img-spin shadow-lg"><Image src="/tailwind.svg" width={100} height={70} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="img-spin-container">
          <div className="img-spin">1</div>
          <div className="img-spin">2</div>
          <div className="img-spin">3</div>
          <div className="img-spin">4</div>
          <div className="img-spin">5</div>
          <div className="img-spin">6</div>
          <div className="img-spin">7</div>
        </div> */}

      </div>
    </div>
  )
}