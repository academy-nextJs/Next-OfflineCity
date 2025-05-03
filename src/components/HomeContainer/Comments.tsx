"use client"
import React from 'react'
import CommentsSlider from '../common/CommentSlider/CommentSlider'
import BlueButton from '../common/BlueButton/BlueButton'

const Comments = () => {
  return (
    <div className='  pt-10'>
        <div className='pt-10'> 
          <BlueButton children=" نظرات کاربران" className='text-[#7575FE] border-1 border-[#7575FE] bg-transparent'/>
        </div>
        <div className='pt-4'>
            <p className='font-[700] text-[32px]'> نطرات کاربراندرباره الفا  </p>
             <p className='text-base text-[#555555] pt-4'> تبم دلتا با ارایه بهترین نیروهای خدماتی و سرویس های  <br />  املاکی سعی دارد تا بتواند در تمام لحظات کناز شما باشد  </p>
        </div>
        <div className='pt-[90px] pb-[109px]'>
         <CommentsSlider />          
        </div>

    </div>
  )
}

export default Comments