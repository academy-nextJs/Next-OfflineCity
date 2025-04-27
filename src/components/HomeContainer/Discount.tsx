'use client'
import React from 'react'
import CustomPlugin from '../common/CustomPlugin/CustomPlugin'
import BlueButton from '../common/BlueButton/BlueButton'


const Discount = () => {
    const slides = [
        
         { content : 'اسلاسد اول'},
         { content : 'اسلاسد دوم'},
         { content : 'اسلاسد سوم'},
     
  ]

  return (
    <div className='pr-[56px] pt-[104px]'>
        <div> <BlueButton children="تخفیفات" className='text-[#7575FE] bg-transparent border-1 border-[#7575FE]'/> </div>
        <div className='pt-4'>
            <div> 
              <span className='text-[700] text-[32px]'>   تخفیفات ویژه </span>
            </div>
            <div> 
              <span className='text-[700] text-[32px]'>   برای شروع بهار  </span>
            </div>
        </div>
        <div className='pt-4'>
           <BlueButton  children="2:25:25" className='text-[#ffff] bg-[#FF5555] border-1'/>
        </div>
        
          <div className='pt-[35px]'> <CustomPlugin slides={slides} /> </div> 
    </div>
  )
}

export default Discount