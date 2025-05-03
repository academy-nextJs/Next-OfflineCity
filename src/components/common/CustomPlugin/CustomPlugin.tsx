import React from 'react'
import { Swiper , SwiperSlide } from "swiper/react";
import { Navigation , Pagination , Autoplay , EffectFade  } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'
import { Skeleton } from '@heroui/react';


type Slide = {
  content: React.ReactNode
}
type data = {

    id:number;
    title:string;
    address:string;
    photos:string;
    price:number;
    rate:number;
    rooms:number;
    bathrooms:number;
    capacity:number;
  
}
 
type CustomPluginProps = {
  showPrice: boolean;
  showDiscount: boolean;
  data:data[]
}


const CustomPlugin = ({ showPrice = true , showDiscount = true , data}:CustomPluginProps) => {

  return (
   <>   
  <div className='flex flex-col items-center lg:flex-row  gap-10 '> 
   {data?.map((item , index) => (   

   <div> 
    <div className='relative w-[303px] h-[282px] rounded-[24px]'>
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
      {data.map((item , index) => (
        <SwiperSlide key={index}>
          {item?.photos.length === 0 ? (
           <div className='w-full h-[400px] flex items-center justify-center '>
             <img src={item.photos} alt={item.title}/>  
           </div>            
          ):
          (
            <Skeleton className="w-full h-full rounded-3xl" />
          )
          }

        </SwiperSlide>
      ))}

    </Swiper>
    </div>
      <div className='pt-4'>  
         <p className='font-[600] text-[20px]'>  {item?.title}    </p>
         <p className='pt-4'> {item?.address}  </p>
         <div className='pt-4'>
            <span>  {item?.rooms}خواب </span>
            <span>  {item?.bathrooms}حمام </span>
            <span> {item?.capacity} نفر  </span>
         </div>
         <div className='pt-4'>
            { showDiscount && <div className='relative inline-block text-slate-300 font-bold'>
             {item?.price} تومان
             <span className='absolute top-2 right-0 left-0 bottom-0 w-full h-px bg-red-600 transform rotate-[-14deg] origin-center'>   </span>
            </div>} /
            {showPrice && <span> {item?.price}  تومان  </span>}
         </div>
     </div>
     </div>


))}
   </div> 
   </>


  )
}

export default CustomPlugin