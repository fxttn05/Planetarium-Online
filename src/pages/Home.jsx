import React from 'react'
import { Link } from 'react-router-dom';
import MiniCarouselCard from '../components/MiniCarouselCard';
import { homeFacts } from "../data/facts";

const Home = () => {
  return (
    <>
      <div className='block md:hidden bg-[url(/Banner2.png)] bg-cover bg-center h-24'>
      </div>
      <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white py-4 md:py-12">
        {/* hero */}
        <div className='flex gap-4 px-2 sm:px-20'>
          <div className="w-full md:w-2/5">
            <div className='text-2xl md:text-4xl space-grotesk-semibold leading-8 md:leading-12 w-[80%] md:w-full mx-auto'>Belajar <br /><span className=' text-3xl md:text-5xl'>Planet Tata Surya</span> <br />Dengan Cara yang Menyenangkan</div>
            <div className='mt-10 md:mt-14 flex justify-center md:justify-normal pl-8'>
              <div className=' hover:scale-102'>
                <div className='absolute -ml-6 -mt-6'>
                  <img src="/planet/Bumi.png" alt=""  className='h-14 w-14 float'/>
                </div>
                <div className=''>
                  <Link to="/planet"><button className='cursor-pointer py-2 px-10 bg-white rounded-full space-grotesk-semibold text-xl md:text-3xl text-black'>Mulai Petualangan!</button></Link> 
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/2 md:w-3/5 hidden md:block h-fill w-auto">
            <img src="/Banner2.png" alt="" className='rounded-lg h-fill w-auto' />
          </div>
        </div>

        <div className='mt-10 mb-10 px-8 sm:px-40 py-4 sm:py-20 bg-gray-500/10 min-h-64'>
          <p className='text-3xl md:text-5xl space-grotesk-semibold text-center'> Eksplorasi Hari ini </p>
          <div className='flex flex-wrap md:flex-nowrap gap-5 mt-10'>
            <div className='w-full md:w-2/3 rounded-lg bg-[#2F3780]/20 h-full'>
              <div className="relative block rounded-base">
                <div className='absolute top-2 left-2'>
                  <div className='px-5 py-1 bg-red-600/50 rounded-full text-xs font-space'>Planet pekan ini</div>
                </div>
                <div className='flex justify-center'>
                  <img className="rounded-t-base w-64 h-64" src="Saturnus-Animation.png" alt="" />
                </div>
                <div className="p-6 ">
                    <h5 className="mt-3 text-2xl font-bold font-space tracking-tight text-heading">Saturnus si Pemilik Cincin</h5>
                    <p className='mt-3 text-lg space-grotesk-normal'>Tahukah kamu? cincin saturnus terbuat dari miliaran bongkahan es dan batu batu yang menari nari mengelilingi planet raksasa</p>
                    <div className="mt-6 text-white text-center">
                      <Link to="/planet/saturnus" className="">
                        <button className='bg-red-600 py-3 rounded-full w-full font-medium font-space  hover:scale-102'>
                          Jelajahi Saturnus <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </Link>
                    </div>
                </div>
              </div>
            </div>
            <div className='w-full  md:w-1/3'>
              <div className='rounded-lg bg-[#2F3780]/20 mb-5 py-4 px-8'>
                <MiniCarouselCard facts={homeFacts} />
              </div>
              <div className='rounded-lg bg-[#2F3780]/20 mb-5'>
                <div className='px-12 py-8'>
                  <div className="flex gap-2 items-center mb-3">
                    <div className="bg-[#2F3780]/30 h-9 w-9 rounded-full flex justify-center items-center">
                      <i className="fa-solid fa-lightbulb"></i>
                    </div>
                    <h4 className="text-white font-space text-xl font-extrabold">
                      Cari tau lebih banyak
                    </h4>
                  </div>
                  <div>
                    <p className='text-2xl font-black font-space mb-2'>
                      Fakta Menarik lain tentang luar angkasa
                    </p>
                    <div className="mt-6 text-white text-center">
                      <Link to="/funfact" className="">
                        <button className='bg-red-600 py-3 rounded-full w-full font-medium font-space  hover:scale-102'>
                          Fun fact <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* planet * 3 */}
        <div className='mt-10 mb-14 px-2 sm:px-20'>
          <div className='mb-16'>
            <p className='text-3xl md:text-5xl space-grotesk-semibold text-center'> Planet Tata Surya </p>
          </div>
          <div className='flex flex-wrap md:flex-nowrap gap-x-4 gap-y-16 mb-8 '>
            <div className="w-full md:w-1/3">
              <div className='rounded-lg p-2 md:p-4 bg-[#2F3780]'>
                <div className='flex justify-center mb-5 -mt-12'>
                  <img src="/planet/Jupiter.png" alt=""  className='h-32 w-32 hover:scale-102 float'/>
                </div>
                <p className='text-3xl space-grotesk-semibold text-center'>Jupiter</p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className='rounded-lg p-2 md:p-4 bg-[#2F3780]'>
                <div className='flex justify-center mb-5 -mt-12'>
                  <img src="/planet/Saturnus.png" alt=""  className='h-32 w-32 hover:scale-102 float'/>
                </div>
                <p className='text-3xl space-grotesk-semibold text-center'>Saturnus</p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className='rounded-lg p-2 md:p-4 bg-[#2F3780]'>
                <div className='flex justify-center mb-5 -mt-12'>
                  <img src="/planet/Venus.png" alt=""  className='h-32 w-32 hover:scale-102 float'/>
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