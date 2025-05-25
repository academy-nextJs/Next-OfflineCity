"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { JSX, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import axiosInstance from "@/utils/services/interceptor/axios";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

type dataProps = {
  title: string;
  id: string;
  gender: string;
  image: string;
  description: string;
};

const CommentsSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [data, setData] = useState<dataProps[]>();

  const GetData = async () => {
    const res = await axiosInstance.get(
      "https://660f8c3b356b87a55c5199d9.mockapi.io/users"
    );

    setData(res?.data);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Swiper
      slidesPerView={5}
      centeredSlides
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        const nav = swiper.params.navigation;
        if (nav && typeof nav !== "boolean") {
          nav.prevEl = prevRef.current;
          nav.nextEl = nextRef.current;
        }
      }}
      loop
      modules={[Navigation]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full group"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
        },
        1536: {
          slidesPerView: 5,
        },
      }}
    >
      {data?.map((comment: dataProps, index: number) => {
        const diff = Math.abs(index - activeIndex);
        let size =
          " opacity-25 mt-32 space-y-10 dark:bg-indigo-500 dark:opacity-[5%] ";

        if (index === activeIndex)
          size = "space-y-60  ";
        else if (diff === 1 || diff === data?.length - 1)
          size = " mt-16 space-y-40  dark:bg-indigo-500 dark:opacity-[30%]";

        return (
          <SwiperSlide
            key={comment.id}
            className="flex justify-center items-center pr-20  "
          >
            <div
              className={clsx(
                "transition-all duration-300 rounded-[32px] shadow-lg p-4 flex flex-col justify-between ",
                size,
                index === activeIndex
                  ? "bg-indigo-500 text-white "
                  : "bg-[#f9f9f9] text-[#1e1e1e]"
              )}
              dir="rtl"
            >
              <p className="text-sm leading-relaxed mb-2">
                {" "}
                {comment.description}{" "}
              </p>
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-[#ffff]">
                  {" "}
                  <img />{" "}
                </div>
                <div className="mt-auto pr-2">
                  <p className="text-sm font-bold"> {comment.title} </p>
                  <p className="text-xs"> 12 ابان 1404 </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      <div
        ref={nextRef}
        className="absolute left-20 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <MdOutlineKeyboardArrowLeft size={22} />
      </div>
      <div
        ref={prevRef}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <MdOutlineKeyboardArrowRight size={22} />
      </div>
    </Swiper>
    //  </div>
  );
};

export default CommentsSlider;
