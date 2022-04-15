import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='flex place-items-center min-h-[80px] w-screen text-gray-300 bg-gray-800 relative z-0'>
      <div className='flex flex-wrap justify-between items-center h-full sm:w-11/12 md:w-10/12 mx-auto'>
        <div className=''>{/* bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-700 */}
          <Link href="/" >
            <a className="text-5xl font-fancy"><span className="hover:text-gray-700">nt</span><span className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br hover:from-sky-500 hover:to-indigo-600 font-extrabold">ks</span></a>
          </Link>
        </div>
        <ul className="flex text-xl font-base"> {/* flex place-items-center gap-10 shadow-md */}
          <li className="ml-10">
            <Link href="/featurette">
              <a className="hover:text-sky-500">Tech Feature</a>
            </Link>
          </li>
          <li className="ml-10">
            <Link href="/calculators">
              <a className="hover:text-sky-500">Calculators</a>
            </Link>
          </li>
          <li className="ml-10">
            <Link href="/blog">
              <a className="hover:text-sky-500">Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>    
  )
}
