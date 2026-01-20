import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MiniCarouselCard from '../../components/MiniCarouselCard';
import QuizCard from '../../components/QuizCard';

const marsFacts = [
  { title: 'Fakta 1', description: 'Deskripsi fakta Mars 1' },
  { title: 'Fakta 2', description: 'Deskripsi fakta Mars 2' },
];

const marsQuiz = [{ question: 'Pertanyaan 1?', options: ['Opsi A', 'Opsi B'], answer: 0 }];

const Mars = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white">
      <div className="flex-grow max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <img src="/planet/Mars.png" alt="Mars" className="w-56 h-56" />
          <h1 className="text-7xl md:text-9xl font-bold font-space">Mars</h1>
          <img src="/planet-real/Mars.png" alt="Astronaut" className="w-56 h-56 object-contain" />
        </div>

        {/* CONTENT TEXT */}
        <div className="max-w-3xl space-y-16">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-red-600 rounded-full"></div>
              <h2 className="text-4xl font-bold">Fakta Cepat</h2>
            </div>
            <ul className="list-disc ml-6 space-y-3 text-xl text-gray-300 marker:text-red-500">
              <li>Disebut "Planet Merah"</li>
              <li>Gunung terbesar di tata surya (Olympus Mons)</li>
              <li>Udara sangat tipis</li>
              <li>Dua bulan: Phobos dan Deimos</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-red-600 rounded-full"></div>
              <h2 className="text-4xl font-bold">Penjelasan</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-300 ml-6">
              Mars dikenal sebagai Planet Merah karena permukaannya dipenuhi debu besi berwarna kemerahan. Suhunya sangat dingin, tetapi para ilmuwan percaya bahwa Mars dulu pernah memiliki air. Karena itu, Mars menjadi planet yang menarik
              dan sering dipelajari untuk mengetahui apakah pernah ada kehidupan di sana.
            </p>
          </section>

          <div className="w-full ">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/VcihM64i0B8?start=6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full min-h-[75vh] rounded-xl"
            />
          </div>

          <div className="flex gap-x-5">
            <div className="w-2/5">
              <div className="rounded-lg bg-[#2F3780]/20 mb-5 p-8">
                <MiniCarouselCard facts={marsFacts} />
              </div>
            </div>
            <div className="w-3/5">
              <QuizCard quizData={marsQuiz} />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center gap-10 mt-24">
          <Link to="/planet/bumi">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xl hover:bg-white transition active:scale-95">
              <i class="fa-solid fa-arrow-left"></i> Menuju Bumi
            </button>
          </Link>
          <Link to="/planet">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xl hover:bg-white transition active:scale-95">Halaman utama</button>
          </Link>
          <Link to="/planet/jupiter">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xl hover:bg-white transition active:scale-95">
              Menuju Jupiter <i class="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mars;
