"use client";
import React, { useEffect, useState } from "react";
import BlueButton from "../common/BlueButton/BlueButton";
import CustomPlugin from "../common/CustomPlugin/CustomPlugin";
import axiosInstance from "@/utils/services/interceptor/axios";
import { motion } from "framer-motion";

const TopHome = () => {
  const [topHome, setTopHome] = useState<any>();

  const GetTopHome = async () => {
    const res = await axiosInstance.get(
      "/houses?page=1&limit=10&sort=rate&order=ASC&search=&location=&propertyType=&transactionType=&minPrice=&maxPrice=&minRent=&maxRent=&minMortgage=&maxMortgage=&minArea=&maxArea="
    );

    setTopHome(res?.data);
  };

  useEffect(() => {
    GetTopHome();
  }, []);

  console.log("tophome 1234 ", topHome);

  return (
    <div className="pt-[180px]">
      <div>
        {" "}
        <BlueButton
          children="خرید و فروش"
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
        className="flex justify-between pt-4"
      >
        <div className="font-[700] text-[32px]">
          <p>
            {" "}
            خرید و فروش های داغ <br /> این هفته
          </p>
        </div>
        <div>
          {" "}
          <BlueButton
            children="مشاهده همه"
            className="bg-[#7575FE]   text-[#ffff]"
          />{" "}
        </div>
      </motion.div>
      <div>
        <CustomPlugin showDiscount={false} showPrice={true} data={topHome} />
      </div>
    </div>
  );
};

export default TopHome;
