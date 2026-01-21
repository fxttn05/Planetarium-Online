import React from 'react'

const About = () => {
  return (
    <>
        <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white px-4 sm:px-20 py-4 md:py-12">
            <h1 className='text-center font-space font-black text-3xl'>Tentang Website</h1>

            <div className='bg-[#2F3780]/20 p-6 md:p-12 font-space text-lg leading-8 mt-4 rounded-xl'>
                <p className='mb-3'>
                    Selamat datang di Planet Explorer!<br></br> 
                    Website ini dibuat sebagai media pembelajaran interaktif untuk membantu anak-anak memahami dunia luar angkasa dengan cara yang seru, mudah, dan menyenangkan.
                </p>
                <p className='mb-3'>
                Di Planet Explorer, kamu bisa:
                    <ul className="list-disc ml-5">
                        <li>Mengenal 9 planet dan benda lain di Tata Surya</li>
                        <li>Melihat ilustrasi planet yang lucu dan penuh warna</li>
                        <li>Membaca fakta cepat (quick facts) yang mudah dipahami</li>
                        <li>Menjelajahi fun facts unik yang membuat belajar jadi tidak membosankan</li>
                        <li>Memahami konsep dasar tata surya tanpa istilah rumit</li>
                    </ul>
                </p>
                <p className='mb-3'>
                Misi kami:<br></br> 
                - Membuat belajar sains, khususnya astronomi, terasa ringan dan penuh <br></br> 
                - Petualangan seperti menjelajah ruang angkasa sungguhan!
                </p>
            </div>

            <div className='bg-[#2F3780]/20 p-6 md:p-12 font-space text-lg leading-8 mt-4 rounded-xl'>
                <p>Website ini juga dibuat untuk memenuhi penugasan kelompok 4 dengan tema edukasi. Rancangan website ini disusun sedemikian rupa agar menarik, mudah digunakan, dan bermanfaat bagi kehidupan kita, terutama dalam memperkenalkan ilmu pengetahuan sejak usia dini.</p>
            </div>

        </div>
    </>
  )
}

export default About