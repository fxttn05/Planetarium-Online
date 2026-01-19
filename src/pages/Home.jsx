import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='block md:hidden bg-[url(/Banner2.png)] bg-cover bg-center h-24'>
      </div>
      <div className="bg-[#171B3E] text-white px-2 sm:px-20 py-4 md:py-12">
        {/* hero */}
        <div className='flex gap-4'>
          <div className="w-full md:w-2/5">
            <div className='text-2xl md:text-4xl space-grotesk-semibold leading-8 md:leading-12 w-[80%] md:w-full mx-auto'>Belajar <br /><span className=' text-3xl md:text-5xl'>Planet Tata Surya</span> <br />Dengan Cara yang Menyenangkan</div>
            <div className='mt-10 md:mt-14 flex justify-center md:justify-normal pl-8'>
              <div className=' hover:scale-102'>
                <div className='absolute -ml-6 -mt-6'>
                  <img src="/planet/Bumi.png" alt=""  className='h-14 w-14 hover-float'/>
                </div>
                <div className=''>
                  <Link to="/planet"><button className='cursor-pointer py-2 px-10 bg-white rounded-full space-grotesk-semibold text-2xl md:text-4xl text-black'>Ayo Belajar!</button></Link> 
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/2 md:w-3/5 hidden md:block">
            <img src="/Banner2.png" alt="" className='rounded-lg h-fill w-auto' />
          </div>
        </div>

        {/* planet * 3 */}
        <div className='mt-20 mb-14'>
          <div className='mb-16'>
            <p className='text-3xl md:text-5xl space-grotesk-semibold text-center'> Planet Tata Surya </p>
          </div>
          <div className='flex flex-wrap md:flex-nowrap gap-x-4 gap-y-16 mb-8 '>
            <div className="w-full md:w-1/3">
              <div className='rounded-lg p-2 md:p-4 bg-[#2F3780]'>
                <div className='flex justify-center mb-5 -mt-12'>
                  <img src="/planet/Jupiter.png" alt=""  className='h-32 w-32 hover:scale-102 hover-float'/>
                </div>
                <p className='text-3xl space-grotesk-semibold text-center'>Jupiter</p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className='rounded-lg p-2 md:p-4 bg-[#2F3780]'>
                <div className='flex justify-center mb-5 -mt-12'>
                  <img src="/planet/Saturnus.png" alt=""  className='h-32 w-40 hover:scale-102 hover-float'/>
                </div>
                <p className='text-3xl space-grotesk-semibold text-center'>Saturnus</p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className='rounded-lg p-2 md:p-4 bg-[#2F3780]'>
                <div className='flex justify-center mb-5 -mt-12'>
                  <img src="/planet/Venus.png" alt=""  className='h-32 w-32 hover:scale-102 hover-float'/>
                </div>
                <p className='text-3xl space-grotesk-semibold text-center'>Venus</p>
              </div>
            </div>
          </div>
          <div className=''>
            <p className='text-2xl space-grotesk-semibold text-center'> dan masih banyak lagi.. </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home