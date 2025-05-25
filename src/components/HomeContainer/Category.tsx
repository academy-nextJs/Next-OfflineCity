"use client";
import React, { useEffect, useState } from "react";
import BlueButton from "../common/BlueButton/BlueButton";
import ImageTextSlider from "../common/Swiper/swiper";
import axiosInstance from "@/utils/services/interceptor/axios";
import { animate, motion, useAnimation, useInView } from "framer-motion";

const Category = () => {
  const [getAllHome, setGetAllHome] = useState<any>([]);

  const GetAllHome = async () => {
    const res = await axiosInstance.get(
      "/houses?page=1&limit=10&sort=rate&order=ASC&search=&location=&propertyType=&transactionType=&minPrice=&maxPrice=&minRent=&maxRent=&minMortgage=&maxMortgage=&minArea=&maxArea="
    );
    setGetAllHome(res?.data);
  };

  useEffect(() => {
    GetAllHome();
  }, []);

  return (
    <>
      {" "}
      <div className="w-[340px] h-[340px] bg-[#7575fefe]/20 rounded-full blur-5xl absolute bottom-[-450px] right-[-120px]">
        {" "}
      </div>
      <div className="pr-[56px] md:pr-[288px] pt-[72px]">
        <BlueButton
          children="دسته بندی"
          className="text-[#7575FE] bg-transparent border-1 border-[#7575FE]"
        />
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
        >
          <div className="pt-4">
            <span className="font-[600] text-[32px]"> هر ملکی بخوای </span>
            <div>
              <span className="font-[600] text-[32px]">
                {" "}
                اینجا پیدا میشه !{" "}
              </span>
            </div>
          </div>
          <div className="pt-4">
            <span className="text-base text-[#555555] ">
              {" "}
              با کلیک به روس هر دسته بندی می توانید تمام اگهی{" "}
            </span>
            <div>
              <span className="text-base text-[#555555]">
                {" "}
                مربوط به ان را مشاهده کنید و به ملک مورد علاقه خود برسید{" "}
              </span>
            </div>
          </div>
        </motion.div>
        <div className=" pl-[56px] pt-10 ">
          <ImageTextSlider slidesPerView={3} data={getAllHome} />
        </div>
      </div>
    </>
  );
};

export default Category;
