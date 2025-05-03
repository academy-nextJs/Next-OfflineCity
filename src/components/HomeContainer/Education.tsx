"use client"
import React from 'react'
import BlueButton from '../common/BlueButton/BlueButton'
import years from '../../assets/HomeContainer/years.png'
import Image from 'next/image'



const Education = () => {
  return (
    <div className='lg:pt-[108px] flex flex-col items-center lg:flex-row lg:justify-between  '>
        <div className=''>
        <div> <BlueButton children="الفا درخشان" className='text-[#7575FE] bg-transparent border-1 border-[#7575FE]' /> </div>
        <div className='pt-4'> 
            <h1 className='flex gap-1 font-[600] text-5xl'>   <h1 className='text-[#7575fe]'>  10+ </h1> سال سابقه درخشان </h1>
        </div>
        <div className='pt-4'>
            <div className='font-[400] text-base'>             
                 <br />  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان 
                 <br />   گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                 <br />   ، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی 
                 <br />   ی باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه  
                 <br />   و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی 
                 <br />  الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان 
                 <br />  امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد
                 <br />   و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                 <br />  دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.       
                                             
            </div>
           </div>
        </div>
            <div className=' pl-[133px]'>
                {/* <div className='w-[340px] h-[340px] bg-[#7575fe] blur-[1000px]'> </div> */}
                <Image  src={years} alt='نمونه عکس' className='w-[528px] h-[528px]'/>
            </div>
        
    </div>
  )
}

export default Education