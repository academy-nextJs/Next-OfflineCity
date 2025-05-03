"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { JSX, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Swiper as SwiperType } from "swiper";
import axiosInstance from "@/utils/services/interceptor/axios";

type commentsProps = {
  id: number;
  text: string;
  author: string;
  date: string;
};

// const comments:commentsProps[] = [
//    {id: 1 , text : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم   از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد', author: 'پارسا' , date: "12,12,12"},
//   //  {id: 1 , text : 'این یک پیام تستی هستش ولی بدئون خلق' , author: 'پارسا' , date: "12,12,12"},
//   //  {id: 1 , text : 'این یک پیام تستی هستش ولی بدئون خلق' , author: 'پارسا' , date: "12,12,12"},
//   //  {id: 1 , text : 'این یک پیام تستی هستش ولی بدئون خلق' , author: 'پارسا' , date: "12,12,12"},
//   //  {id: 1 , text : 'این یک پیام تستی هستش ولی بدئون خلق' , author: 'پارسا' , date: "12,12,12"},
//   //  {id: 1 , text : 'این یک پیام تستی هستش ولی بدئون خلق' , author: 'پارسا' , date: "12,12,12"},
//   //  {id: 1 , text : 'این یک پیام تستی هستش ولی بدئون خلق' , author: 'پارسا' , date: "12,12,12"},
//   //  {id: 1 , text : 'این یک پیام تستی هستش ولی بدئون خلق' , author: 'پارسا' , date: "12,12,12"},
//   //  {id: 1 , text : 'این یک پیام تستی هستش ولی بدئون خلق' , author: 'پارسا' , date: "12,12,12"},

// ]

type dataProps = {
  title: string;
  id: string;
  gender: string;
  image: string;
  description: string;
};

const CommentsSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const [data, setData] = useState<dataProps[]>();

  // const [comments, setComments] = useState({
  //   text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد'
  // })

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
      navigation
      loop
      modules={[Navigation]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full "
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
        let size = "w-40 h-48 xl:w-[178px] xl:h-[197px] mr-12 opacity-25 mt-32";

        if (index === activeIndex)
          size = "w-64 h-72 xl:w-[385px] xl:h-[426px] ";
        else if (diff === 1 || diff === data?.length - 1)
          size = "w-52 h-64 xl:w-[279px] xl:h-[308px] mr-10 mt-16 ";

        return (
          <SwiperSlide
            key={comment.id}
            className="flex justify-center items-center pr-20 mt- "
          >
            <div
              className={clsx(
                "transition-all duration-300 rounded-[32px] shadow-lg p-4 flex flex-col justify-between ",
                size,
                index === activeIndex
                  ? "bg-indigo-500 text-white"
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
    </Swiper>
    //  </div>
  );
};

export default CommentsSlider;
