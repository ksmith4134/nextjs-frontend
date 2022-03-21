import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="">
      <ul className="flex items-baseline shadow-md py-5 px-20 gap-10">
        <li className="flex">
          <Link href="/" >
            <a className="text-2xl font-bold text-black-600 hover:text-blue-500">Strapi</a>
          </Link>
        </li>
        <li className="flex">
          <Link href="/calculators">
            <a className="text-xl text-black-600 hover:text-blue-500">Calculators</a>
          </Link>
        </li>
        <li className="flex">
          <Link href="/featurette">
            <a className="text-xl text-black-600 hover:text-blue-500">Featurette</a>
          </Link>
        </li>
      </ul>
    </nav>    
  )
}
