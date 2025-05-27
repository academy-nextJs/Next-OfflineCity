'use client'

import React from 'react'
import { RiUser3Fill } from "react-icons/ri";
import { BsFillCaretLeftFill } from "react-icons/bs"
import CircleProgressBar from '../CircleProgressBar/CircleProgressBar';
import {motion} from 'framer-motion'
const DashboardProfile = () => {
    const profileCompletion = 65;
  return (
    <motion.div 
    whileHover={{
        scale: 1.03,
        rotate: 1,
        boxShadow: "0  10px  30px rgba(0 , 0 , 0 , 0.2)",
        borderColor: "#8cff45"
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      }}
      style={{border: '2px solid transparent'}}
    className="bg-white rounded-[12px] dark:bg-zinc-900  group">
      <div className="flex   justify-between pr-[19px] pt-[13px] pb-3">
        <div className='flex gap-2 '>
        <RiUser3Fill size={20}/>
           وضعیت پروفایل شما 
        </div>
        <div className='flex gap-6 font-normal text-base text-[#7a7a7a]'>
            <span> ویرایش  </span>
        <div className="flex items-center gap-1 pl-5">
          <BsFillCaretLeftFill size={14} className="opacity-30" />
          <BsFillCaretLeftFill size={18} className="opacity-60" />
          <BsFillCaretLeftFill size={23} className="opacity-100" />
        </div>
        </div>
      </div>
      <div className=" border-t-1 border-dashed border-[#888888]  pb-[53px] flex justify-between"> 
         <div className=" pr-6 pl-5 pt-9 ">
               <p className='text-4xl'> 40% </p>
               <p className='font-normal pt-[14px]'>  برای اینکه بازدید خوبی داشته باشید پروفایل شما باید 70% تکمیل شده باشد  </p>
               <p className='font-normal text-xs text-[#888888] pt-[43px]'>  اخرین تغییرات در 3 دقیقه پیش  </p>
         </div>
         <div>
         <div className=" pr-6 pl-5 pt-9 ">
          <CircleProgressBar percentage={profileCompletion} />
         </div>
         </div>
      </div>
    </motion.div>
  )
}

export default DashboardProfile