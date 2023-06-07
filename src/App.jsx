import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./assets/img/Naruto.png"
import image2 from "./assets/img/Minato.png"
import image3 from "./assets/img/Sasuke.png"
import image4 from "./assets/img/Sakura.png"
import image5 from "./assets/img/Kakashi.png"
import image6 from "./assets/img/Hinata.png"
import image7 from "./assets/img/RockLee.png"
import image8 from "./assets/img/Shikamaru.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'bootstrap/dist/css/bootstrap.min.css';

// import required modules
import { Pagination, Autoplay, EffectCreative, EffectCoverflow } from "swiper";
import { useState } from "react";
import { useEffect } from "react";
import { HinataHyuga, KakashiHatake, MinatoNamikaze, NarutoUzumaki, RockLee, SakuraHaruno, SasukeUchiha, ShikamaruNara } from "./components/contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

function App() {
  const [indexSlide, setIndexSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [bgColor, setBgColor] = useState('bg-[#ec8e46]');

  useEffect(() => {
    if (indexSlide === 0) {
      setBgColor('bg-[#ec8e46]')
    } else if (indexSlide === 1) {
      setBgColor('bg-[#0c466e]')
    } else if (indexSlide === 2) {
      setBgColor('bg-gray-400')
    } else if (indexSlide === 3) {
      setBgColor('bg-[#c2474a]')
    } else if (indexSlide === 4) {
      setBgColor('bg-gray-500')
    } else if (indexSlide === 5) {
      setBgColor('bg-[#b5afb4]')
    } else if (indexSlide === 6) {
      setBgColor('bg-[#59907c]')
    } else if (indexSlide === 7) {
      setBgColor('bg-[#666666]')
    }
    if (swiper !== null) {
      swiper.slideTo(indexSlide, 300)
    }
  },[indexSlide,swiper])

  return (
    <>
    <div className='w-full h-screen flex flex-col justify-center items-center overflow-auto'>
      <div className={`w-full h-full ${bgColor} bg-cover flex flex-col justify-start items-start transition-all ease-in-out duration-500 overflow-auto`}>
        <div className="w-96 h-96 bg-[url('./assets/img/Konohagakure.png')] bg-cover fixed right-20 bottom-32 opacity-20 scale-150"></div>
        <div className="w-full h-full fixed flex justify-start items-start top-0 left-[-6rem]">
          <Swiper
            effect={"creative"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            creativeEffect={{
              prev: {
                translate: [-330, 50, 400],
              },
              next: {
                translate: [-380, -200, -600], // X,Y,Z AXIS
              },
            }}
            pagination={true}
            modules={[EffectCreative, Pagination]}
            className="Character"
            onSwiper={setSwiper}
          >
            <SwiperSlide>
              <img src={image1} className='w-full h-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} className='w-full h-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} className='w-full h-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} className='w-full h-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image5} className='w-full h-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image6} className='w-full h-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image7} className='w-full h-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image8} className='w-full h-full' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full h-fit flex justify-between items-start p-2 z-20">
          <div className="w-12 h-8 bg-[url('./assets/img/Konohagakure.png')] bg-cover bg-center opacity-100 scale-100"></div>
          <div className="w-fit h-full text-center text-white flex flex-col justify-center item-center">
            <span className="text-3xl font-bold">NARUTO</span>
            <span className="text-sm font-bold mt-[-5px]">SHIPPUDEN</span>
          </div>
          <input type="text" className="w-44 h-8 border text-white
          rounded-full bg-gray-700 opacity-50 hover:bg-gray-100 
          focus:bg-gray-100 focus:outline-none px-4 text-sm transition-all ease-in-out duration-300" placeholder="Pencarian"/>
        </div>
        <div className="w-full h-full flex overflow-auto">
          <div className="w-full h-full flex"></div>
          <div className="w-full h-full flex flex-col justify-start items-start pl-20 text-white overflow-hidden transition-all ease-in-out duration-500">
            {
              indexSlide === 0?
              <NarutoUzumaki />
              : indexSlide === 1?
              <MinatoNamikaze />
              : indexSlide === 2?
              <SasukeUchiha />
              : indexSlide === 3?
              <SakuraHaruno />
              : indexSlide === 4?
              <KakashiHatake />
              : indexSlide === 5?
              <HinataHyuga />
              : indexSlide === 6?
              <RockLee />
              : indexSlide === 7 &&
              <ShikamaruNara />
            }
          </div>
        </div>
        <div className="w-full h-fit z-0 ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
              scale:1
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="selectChar"
            onSlideChange={(e) => setIndexSlide(e.realIndex)}
          >
            <SwiperSlide className='rounded-xl'>
              <img src={image1} className='w-full h-full bg-transparent'></img>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl'>
              <img src={image2} className='w-full h-full'></img>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl'>
              <img src={image3} className='w-full h-full'></img>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl'>
              <img src={image4} className='w-full h-full'></img>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl'>
              <img src={image5} className='w-full h-full'></img>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl'>
              <img src={image6} className='w-full h-full'></img>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl'>
              <img src={image7} className='w-full h-full'></img>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl'>
              <img src={image8} className='w-full h-full'></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
