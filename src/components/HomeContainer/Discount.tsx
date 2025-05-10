'use client'
import React, { useEffect, useState } from 'react'
import CustomPlugin from '../common/CustomPlugin/CustomPlugin'
import BlueButton from '../common/BlueButton/BlueButton'
import axiosInstance from '@/utils/services/interceptor/axios'


const Discount =  () => {
const [discountHouse, setDiscountHouse] = useState<any>()

const GetDiscountHome = async () => {
  const res = await axiosInstance.get("/houses?page=1&limit=10&sort=price&order=ASC")

  setDiscountHouse(res?.data)
}

useEffect(() => {

  GetDiscountHome()

}, [])



  return (
    <div className='pt-[104px]'>
        <div> <BlueButton children="تخفیفات" className='text-[#7575FE] bg-transparent border-1 border-[#7575FE]'/> </div>
        <div className='pt-4'>
            <div> 
              <span className='text-[700] text-[32px]'>   تخفیفات ویژه </span>
            </div>
            <div> 
              <span className='text-[700] text-[32px]'>   برای شروع بهار  </span>
            </div>
        </div>
        <div className='pt-4 flex justify-between'>
           <BlueButton  children="2:25:25" className='text-[#ffff] bg-[#FF5555] border-1'/>
           <BlueButton  children="مشاهده همه" className='text-[#ffff] bg-[#7575FE] border-1'/>
        </div> 
          <div className='pt-[35px]'> <CustomPlugin  showDiscount={true} showPrice={true}  data={discountHouse}/> </div> 
    </div>
  )
}

export default Discount