import Image from 'next/image'

export default function Test() {
  return (
    <div className="bg-white h-full">
      <div className="sm:w-11/12 md:w-10/12 mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols lg:grid-cols-4 gap-8 border-2 mt-12">
          <div className="bg-gray-400 rounded-2xl h-20 text-center text-xl font-bold pt-4">1</div>
          <div className="bg-gray-400 rounded-2xl h-20 text-center text-xl font-bold pt-4">2</div>
          <div className="bg-gray-400 rounded-2xl h-20 text-center text-xl font-bold pt-4">3</div>
          <div className="bg-gray-400 rounded-2xl h-20 text-center text-xl font-bold pt-4">4</div>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 place-items-center border-2 gap-6 mt-12"> {/* sm:grid-cols-1 md:grid-cols-2 */}
          <div className="rounded-2xl sm:order-last lg:order-first order-last bg-gray-400 p-4">
            <h2 className="text-6xl">Title</h2>
            <h4 className='mt-8 font-semibold text-4xl'>This is a subtitle</h4>
            <p className='mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis blanditiis, laboriosam temporibus sit dignissimos doloremque? Quia alias, eos harum aliquid, debitis optio ducimus dignissimos laboriosam facilis repellendus error vero excepturi.</p>
          </div>
          <div className='bg-gray-400 rounded-2xl w-full h-full text-center text-xl font-bold pt-4'>
            Img
          </div>
        </div>
        
      </div>
    </div>
  )
}
