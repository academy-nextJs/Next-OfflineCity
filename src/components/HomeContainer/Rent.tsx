"use client"
import React from 'react'
import BlueButton from '../common/BlueButton/BlueButton'
import ImageTextSlider from '../common/Swiper/swiper'

const Rent = () => {
  return (
   <div className='pt-[87px] '> 
     <div className='bg-[#f9f9f9] pr-10 pb-[56px] rounded-[32px]'>
        <div className='pt-10'> 
          <BlueButton children="مقصد رویا ها" className='text-[#7575FE] border-1 border-[#7575FE] bg-transparent'/>
        </div>
        <div className='text-[32px] font-[700] pt-4'>
            <div>
                <h1>  اجاره ویلا در  </h1>
            </div>
            <div>
                <h1>  محبوب ترین مقاصد این ماه  </h1>
            </div>            
        </div>
        <div className='text-base text-[#555555] pt-4'>
            <div>
                <h1> در اینجا میتوانید محبوب ترین مقاصد را از بین انتخاب</h1>
            </div>
            <div>
                <h1> کاربران مشاهده و بررسی کنید </h1>
            </div>            
        </div>
        <div className='pt-10'>
            <ImageTextSlider slidesPerView={4.5}/>
        </div>
     </div>
  </div>
  )
}

export default Rent