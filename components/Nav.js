import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='flex justify-center h-16 w-screen text-gray-900 shadow-lg'>
      {/* bg-[#1D1D3A] */}
      <div className='flex justify-between items-center h-full sm:w-11/12 md:w-10/12 mx-auto'>
        <div>
          <Link href="/" >
            <a className="text-2xl font-bold text-black-600 hover:text-sky-500">Home</a>
          </Link>
        </div>
        <ul className="flex"> {/* flex place-items-center gap-10 shadow-md */}
          <li className="ml-10">
            <Link href="/calculators">
              <a className="text-xl text-black-600 hover:text-sky-500">Calculators</a>
            </Link>
          </li>
          <li className="ml-10">
            <Link href="/featurette">
              <a className="text-xl text-black-600 hover:text-sky-500">Featurette</a>
            </Link>
          </li>
          <li className="ml-10">
            <Link href="/test">
              <a className="text-xl text-black-600 hover:text-sky-500">Test</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>    
  )
}
