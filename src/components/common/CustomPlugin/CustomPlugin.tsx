import React from 'react'
import { Swiper , SwiperSlide } from "swiper/react";
import { Navigation , Pagination , Autoplay , EffectFade  } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'
import { Skeleton } from '@heroui/react';
import {motion} from 'framer-motion'
import { LuBed } from "react-icons/lu";
import { BiBath } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { TbMapSearch } from "react-icons/tb";

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

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  }



  const fromRight = {
  hidden: {opacity: 0 , x: 100},
  show: {opacity: 1 , x:0 , transition: {duration: 0.5 , ease: 'easeOut'}}
  }
  return (
   <>   
  <motion.div 
   variants={containerVariants}
   initial="hidden"
   whileInView="show"
   viewport={{once: true , amount: 0.5}}
  className='flex flex-col items-center lg:flex-row  gap-10 '> 
   {data?.map((item , index) => (   

   <div> 
    <motion.div 
    variants={fromRight}
    className='relative w-[303px] h-[282px] rounded-[24px]'>
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
    </motion.div>
      <div className='pt-4'>  
         <p className='font-[600] text-[20px]'>  {item?.title}    </p>
         <div className='pt-4 flex gap-2'> <div className='w-8 h-8 rounded-[16px] bg-[#f3f3f3] dark:bg-zinc-800 flex items-center justify-center dark: text-zinc-400'> <TbMapSearch size={20} /></div> {item?.address}  </div>
         <div className='pt-4  flex gap-2'>
            <span className='flex gap-2'> <div className='w-8 h-8 rounded-[16px] bg-[#f3f3f3] flex items-center justify-center text-zinc-400 dark:bg-zinc-800 '> <LuBed size={20}/> </div>   {item?.rooms}خواب </span>
            <span className='flex gap-2 pr-5'> <div className='w-8 h-8 rounded-[16px] bg-[#f3f3f3] flex items-center justify-center text-zinc-400 dark:bg-zinc-800 '> <BiBath size={20}/></div>  {item?.bathrooms}حمام </span>
            <span className='flex gap-2 pr-5'> <div className='w-8 h-8 rounded-[16px] bg-[#f3f3f3] flex items-center justify-center text-zinc-400 dark:bg-zinc-800 '> <IoPeopleOutline size={20}/> </div>  {item?.capacity} نفر  </span>
         </div>
         <div className='pt-4'>
            { showDiscount && <div className='relative inline-block text-slate-300 font-bold'>
             {item?.price} تومان
             <span className='absolute top-2 right-0 left-0 bottom-0 w-full h-px bg-red-600 transform rotate-[-14deg] origin-center '>   </span>
            </div>} /
            {showPrice && <span> {item?.price}  تومان  </span>}
         </div>
     </div>
     </div>


))}
   </motion.div> 
   </>


  )
}

export default CustomPlugin