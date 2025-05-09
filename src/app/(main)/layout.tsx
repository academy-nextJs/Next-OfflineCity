"use client"

import { ReactNode, useEffect, useRef, useState } from "react";
import MyNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import 'leaflet/dist/leaflet.css'
import {AnimatePresence, motion} from "framer-motion"
import { usePathname } from "next/navigation";
import SlidePageLoader from "@/components/common/SlidePageLoader/SlidePageLoader";



export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {

  const pathName = usePathname()
  const previousPath = useRef<string | null>(null)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  const [renderPath, setRenderPath] = useState(pathName)
  const [showLoader, setShowLoader] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null > (null)

  useEffect(() => {
  if (previousPath.current && previousPath.current !== pathName) {
    setShowLoader(true)
 
    timeoutRef.current = setTimeout(() => {
      setRenderPath(pathName)
      setShowLoader(false)
    } , 1000)

  }else {
    setRenderPath(pathName)
  }
  previousPath.current = pathName;

  return () => {
    if(timeoutRef.current) clearTimeout(timeoutRef.current)
  }
  }, [pathName])
  

const variants = {
  initial : {
    rotateY: direction === 'forward' ? '-90' : '-90',
    opacity: 0,
  },
  animate:{
   rotateY: 0,
   opacity: 1, 
   transition: {
    duration: 0.8,
    ease: [0.7 , 0 , 0.2 , 1]
   },
  },
  exit: {
    rotateY: direction === 'forward' ? '90' : "-90" , 
    opacity: 0,
    transition: {
      duration:0.5,
      ease: "easeInOut"
    }
  }
}  
  return (
    <div style={{
      position: 'relative',
      perspective: '1200px',
      overflowX: 'hidden',
      minHeight: '100vh'
    }}>
      <AnimatePresence>
         {showLoader && <SlidePageLoader key='loader'/>}
      </AnimatePresence>
    <AnimatePresence mode="wait"  >
      <motion.div 
       key={renderPath}
       variants={variants}
       initial="initial"
       animate="animate"
       exit="exit"
       style={{
        position: 'absolute' , 
        width: '100%' ,
        height: '100%', 
        backfaceVisibility: 'hidden' , 
        transformStyle: "preserve-3d" ,
        }}
      className="lg:pb-11"> 
        <MyNavbar />
        {children}
         <Footer />
      </motion.div>
    </AnimatePresence>
     </div>
  );
}
