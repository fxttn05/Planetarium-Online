import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="bg-[#171B3E] text-white h-screen px-5 md:px-20 py-4 md:py-10">
        {/* hero */}
        <div className='flex gap-4'>
          <div className="w-full md:w-2/5">
            <div className='text-3xl md:text-4xl space-grotesk-semibold leading-12'>Belajar <br /><span className=' text-4xl md:text-5xl'>Planet Tata Surya</span> <br />Dengan Cara yang Menyenangkan</div>
            <div className='mt-14 flex pl-8'>
                <div className='absolute -ml-6 -mt-6'>
                  <img src="/planet/Bumi.png" alt=""  className='h-14 w-14'/>
                </div>
                <div className=''>
                  <Link to="/planet"><button className='py-2 px-10 bg-white rounded-full space-grotesk-semibold text-4xl text-black'>Ayo Belajar!</button></Link> 
                </div>
            </div>
          </div>
          <div className="w-3/5 hidden sm:block">
            <img src="/Banner2.png" alt="" className='rounded-lg h-full' />
          </div>
        </div>

        {/* planet * 3 */}
        <div className='mt-14'>
          <div>
            <p className='text-3xl space-grotesk-semibold text-center'> Planet tata Surya </p>
          </div>
          <div className='flex gap-4'>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home