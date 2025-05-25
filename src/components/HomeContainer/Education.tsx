"use client";
import React, { useEffect, useRef, useState } from "react";
import BlueButton from "../common/BlueButton/BlueButton";
import years from "../../assets/HomeContainer/years.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Education = () => {
  const text = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد'
  const ref = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [typeText, setTypeText] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {threshold: 0.5}
    )

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();

  }, [])

  useEffect(() => {
    if (!visible || typeText.length === text.length) return;

    const currentChar = text[typeText.length]
    const isPauseChar = ['.' , '!' , ',' , '?']
    const delay  = isPauseChar ? 100 : 60

    const timeout = setTimeout(() => {
      setTypeText(text.slice(0 , typeText.length + 1))

      if (audioRef.current && !isPauseChar) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {})
      }

    } , delay)

    return () => clearTimeout(timeout)

  }, [visible , typeText , text])
  
  
  
  return (
    <div  className="lg:pt-[108px] flex flex-col items-center lg:flex-row lg:justify-between  ">
      <div className=" lg:w-1/2">
        <div>
          {" "}
          <BlueButton
            children="الفا درخشان"
            className="text-[#7575FE] bg-transparent border-1 border-[#7575FE]"
          />{" "}
        </div>
        <motion.div
          animate={{
            textShadow: [
              "0 0 0px #fff",
              "0 0 10px #0ff",
              "0 0 20px #0ff",
              "0 0 10px #0ff",
              "0 0 0px #fff",
            ],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="pt-4"
        >
          <h1 className="text-[#7575fe] flex gap-1 font-[600] text-5xl">
            10+ سال سابقه درخشان
          </h1>
        </motion.div>
        <div className="pt-4" ref={ref} dir="rtl">
          <motion.span 
          initial={{opacity : 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 0.4
          }}
          className="font-[400] text-base ">
           {typeText}
          </motion.span>
          <motion.span>
             <audio 
              ref={audioRef}
              src='/sounds/type.mp3'
              preload="auto"
              style={{display: 'none'}}
             />
          </motion.span>
        </div>
      </div>
      <div className="hidden lg:flex pl-10">
        <div className="w-[340px] h-[340px] bg-[#7575fefe]/20 rounded-full blur-5xl relative right-56">
          {" "}
        </div>

        <Image src={years} alt="نمونه عکس" className="" />
        <div className="w-[340px] h-[340px] bg-[#7575fefe]/20 rounded-full blur-5xl relative top-56 left-20">
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Education;
