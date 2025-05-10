"use client";
import React, { useEffect, useState } from "react";
import CustomPlugin from "../common/CustomPlugin/CustomPlugin";
import BlueButton from "../common/BlueButton/BlueButton";
import axiosInstance from "@/utils/services/interceptor/axios";
import Link from "next/link";
import { CiClock1 } from "react-icons/ci";

const Discount = () => {
  const [discountHouse, setDiscountHouse] = useState<any>();

  const GetDiscountHome = async () => {
    const res = await axiosInstance.get(
      "/houses?page=1&limit=10&sort=rate&order=ASC&search=&location=&propertyType=&transactionType=&minPrice=&maxPrice=&minRent=&maxRent=&minMortgage=&maxMortgage=&minArea=&maxArea="
    );

    setDiscountHouse(res?.data);
  };

  useEffect(() => {
    GetDiscountHome();
  }, []);



  return (
    <div className="pt-[104px]">
      <div>
        {" "}
        <BlueButton
          children="تخفیفات"
          className="text-[#7575FE] bg-transparent border-1 border-[#7575FE]"
        />{" "}
      </div>
      <div className="pt-4">
        <div>
          <span className="text-[700] text-[32px]"> تخفیفات ویژه </span>
        </div>
        <div>
          <span className="text-[700] text-[32px]"> برای شروع بهار </span>
        </div>
      </div>
      <div className="pt-4 flex justify-between">
        <div className="flex gap-2"> 
        <div className="flex gap-2  space-x-6 rounded-[100px] justify-center items-center pr-2 bg-[#ff5555] text-white">
          {" "}
          <div
          
          />{" "}
          2:25:25
          <div className="">
            {" "}
            <CiClock1  size={20}/>{" "}
          </div>{" "}
        </div>
        <div className="text-red-500 font-[600]">
           فرصت رو  <br/> از دست نده
        </div>
       </div>
          <Link href="/houseReserve" className="w-[132px] h-12 bg-[#7575fefe] rounded-[100px] flex items-center justify-center text-white font-[600]"> مشاهده همه </Link>             
      </div>
      <div className="pt-[35px]">
        {" "}
        <CustomPlugin
          showDiscount={true}
          showPrice={true}
          data={discountHouse}
        />{" "}
      </div>
    </div>
  );
};

export default Discount;
