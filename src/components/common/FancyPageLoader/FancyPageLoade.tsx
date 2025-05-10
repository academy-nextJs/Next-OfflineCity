import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

const barVarients = {
    initial: {
        y: '100%',
        scale: 0.9,
        skewY: 10,
        opacity: 0
    },
    animate: (i:number) => ({
      y:0,
      scale: 1 ,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.7 , 0 , 0,2 , 1],
      },
    }),
    exit:(i:number) => ({
        y: '100%',
        scale: 0.9,
        skewY:-10,
        opacity: 0,
        transition: {
            delay: i * 0.05,
            durattion: 0.5,
            ease: [0.7 ,0 , 0,2 ,1],
        }
    })
}

const FancyPageLoade = () => {
 const [show, setShow] = useState(true)

   const bars = [0 , 1 , 2 , 3]

    useEffect(() => {
      const Timeout = setTimeout(() => {
        setShow(false)
      } , 2000)
      return () => clearTimeout(Timeout)
    }, [])
    
 

  return (
    <AnimatePresence> 
        {show && (

  
    <motion.div
     className='fixed inset-0 bg-black z-[100] overflow-hidden flex items-center justify-center'
     initial='initial'
     animate='animate'
     exit='exit'
    >
        <motion.div
         initial={{opacity: 0 , scale: 0.9}}
         animate={{opacity: 1 , scale : 1}}
         exit={{opacity: 0 , scale: 0.95}}
         transition={{delay: 0.4 , duration: 0.6}}
         className='absolute z-[101] text-white text-2xl font-bold tracking-wider'
        >
          Loading .......
        </motion.div>
         <div className='absolute inset-0 flex flex-col justify-end'>
          {bars.map((i) => (
            <motion.div
               key={i}
               custom={i}
               variants={barVarients}
               className='w-full h-1/4 bg-black rounded-lg shadow-lg'
             >

            </motion.div>
          ))}
         </div>
    </motion.div>
          )}
    </AnimatePresence>
  )
}

export default FancyPageLoade