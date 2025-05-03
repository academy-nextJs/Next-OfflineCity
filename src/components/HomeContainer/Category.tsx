'use client'
import React, { useEffect, useState } from 'react'
import BlueButton from '../common/BlueButton/BlueButton'
import ImageTextSlider from '../common/Swiper/swiper'
import axiosInstance from '@/utils/services/interceptor/axios'




const Category =  () => {
  const [getAllHome, setGetAllHome] = useState<any>([])

const GetAllHome = async () => {
     const res = await axiosInstance.get("/houses?page=1&limit=10&sort=price&order=ASC")
     setGetAllHome(res?.data)
}

useEffect(() => {
  
 GetAllHome()

}, [])

 
  return (
    <>
    <div className='pr-[288px] pt-[72px]'> 
        <BlueButton children="دسته بندی" className='text-[#7575FE] bg-transparent border-1 border-[#7575FE]' />
        <div>
           <div className='pt-4'>
            <span className='font-[600] text-[32px]'> هر ملکی بخوای </span>
             <div>  
                <span className='font-[600] text-[32px]'> اینجا پیدا میشه ! </span>
             </div>
            </div> 
            <div className='pt-4'> 
            <span className='text-base text-[#555555] '>  با کلیک به روس هر دسته بندی می توانید تمام اگهی   </span>
            <div> 
                <span className='text-base text-[#555555]'>  مربوط به ان را مشاهده کنید و به ملک مورد علاقه خود برسید </span>
            </div>
            </div>
        </div>          
             <div className=' pl-[56px] pt-10 '> 
                 <ImageTextSlider slidesPerView={3}  data={getAllHome}/>              
              </div>
    </div>
    
    </> 
  )
}

export default Category