import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='flex place-items-center min-h-[70px] w-screen text-gray-900 shadow-md relative z-0'>
      {/* bg-[#1D1D3A] */}
      <div className='flex justify-between flex-wrap items-center h-full sm:w-11/12 md:w-10/12 mx-auto'>
        <div>
          <Link href="/" >
            <a className="text-3xl font-bold text-black hover:text-sky-500">Home</a>
          </Link>
        </div>
        <ul className="flex"> {/* flex place-items-center gap-10 shadow-md */}
          <li className="ml-10">
            <Link href="/featurette">
              <a className="text-xl text-black font-semibold hover:text-sky-500">Tech Feature</a>
            </Link>
          </li>
          <li className="ml-10">
            <Link href="/calculators">
              <a className="text-xl text-black font-semibold hover:text-sky-500">Calculators</a>
            </Link>
          </li>
          <li className="ml-10">
            <Link href="/blog">
              <a className="text-xl text-black font-semibold hover:text-sky-500">Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>    
  )
}
