import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-pink-600'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        Brayan Fernandez
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        I'm a Web Developer.
      </h2>
      <p className=' text-xl text-[#a1a6b4] py-4 max-w-[700px]'>
          As a Web developer, I am passionate about transforming ideas into functional
          and efficient software solutions. I bring a solid foundation
          in software development, coupled with a relentless curiosity
          and eagerness to learn and grow in a dynamic tech environment.
      </p>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </div>
    </div>
  </div>
  )
}