import React from 'react'
import {motion} from 'framer-motion'
const SlidePageLoader = () => {
  return (
    <motion.div
     initial={{y: '100%'}}
     animate= {{y: 0}}
     exit={{y: '-100%'}}
     transition={{duration: 0.6 , ease: [0.7 , 0 , 0.2, 1]}}
     className='fixed inset-0 z-[100] bg-black flex items-center justify-center'
    >
    <motion.div
     initial={{opacity: 0 , scale: 0.9}}
     animate={{opacity: 1 , scale: 1}}
     exit={{opacity: 0  , scale: 0.95}}
     transition={{duration: 0.6 , delay: 0.2}}
     className='text-white text-2xl font-semibold tracking-wider'
    >
        <motion.div
        animate={{
            y: [0,-4 , 0],
        }}
        transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: 'easeInOut'
        }}
        >
          Loading ....
        </motion.div>

    </motion.div>
    </motion.div>
  )
}

export default SlidePageLoader