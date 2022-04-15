import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='flex place-items-center min-h-[80px] w-screen shadow-md text-gray-900 bg-white relative z-0'>
      <div className='flex flex-wrap justify-between items-center h-full sm:w-11/12 md:w-10/12 mx-auto'>
        <div className=''>{/* bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-700 */}
          <Link href="/" >
            <a><span className="text-2xl text-gray-400 hover:text-white">not</span><span className="text-5xl bg-clip-text font-bold text-transparent bg-gradient-to-br from-cyan-300 to-cyan-500">ks</span></a>
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
