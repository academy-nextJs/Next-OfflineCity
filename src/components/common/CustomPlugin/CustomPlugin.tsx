import React from 'react'
import { Swiper , SwiperSlide } from "swiper/react";
import { Navigation , Pagination , Autoplay , EffectFade  } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'


type Slide = {
  content: React.ReactNode
}
 
type CustomPluginProps = {
  slides: Slide[];
}


const CustomPlugin = ({slides}:CustomPluginProps) => {
  return (
   <div> 
    <div className='relative w-[303px] h-[282px] bg-green-400 '>
    <Swiper
     modules={[Navigation , Pagination , Autoplay , EffectFade]}
     loop
     autoplay={{
      delay: 3000,
      disableOnInteraction: false,
     }}
     pagination={{clickable: true}}
     navigation
     effect='fade'
     className='h-full'
    >
      {slides.map((slide , index) => (
        <SwiperSlide key={index}>
           <div className='w-full h-[400px] flex items-center justify-center '>
              {slide.content}
           </div>
        </SwiperSlide>
      ))}

    </Swiper>
    </div>
      <div>  
 
     </div>
   </div> 
  )
}

export default CustomPlugin