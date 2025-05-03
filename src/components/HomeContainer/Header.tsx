'use client'
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Image } from "@heroui/image";
import SearchModals from "../common/SearchModals/SearchModals";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/services/interceptor/axios";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false)

  const [data, setData] = useState<any>()
  const [filter, setFilters] = useState<any>()

  const GetTopHome = async () => {
    const res = await axiosInstance.get("/houses?page=1&limit=10&sort=price&order=ASC")
  
    setData(res?.data)
  }
  
  useEffect(() => {
  
    GetTopHome()
  
  }, [])
  
  return (
    <div className="flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-between px-14 my-8 gap-8">
      <div className="flex justify-center lg:justify-start items-center w-full lg:w-1/2">
        <div className="relative">
          <Image src="/images/home/image 1.png" />
          <button onClick={() => setIsOpen (true)} className="hidden lg:flex flex-col bg-main text-white text-[10px] xl:text-[12px] w-20 h-20 xl:w-24 xl:h-24 rounded-full  justify-center items-center border-4 border-white absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              className="w-6 h-6 xl:w-8 xl:h-8"
              src="/images/home/Frame.png"
            />
            جستجو سریع
            <SearchModals isOpen={IsOpen} onClose={() => setIsOpen(false)} onFilter={(data) =>{setFilters(data)}}/>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8 pt-4 w-full sm:w-1/2">
        <div className="flex flex-col items-center xl:items-start gap-2 xl:gap-6 h-1/2">
          <h1 className="text-[20px] xs:text-[24px] sm:text-[28px] xl:text-[40px] font-[700] xl:max-w-[335px] text-center xl:text-start sm:text-nowrap xl:text-wrap">
            خانه‌ای که می‌خوای، جایی که می‌خوای
          </h1>
          <div className="max-w-[385px]">
            <p className="text-[#767676] text-center lg:text-start">
              رزور ، رهن ، اجاره و حتی خرید و فروش ملک مورد نظرتون مثل آب خوردن
              فقط در دلتا
            </p>
          </div>
        </div>

        <div className="hidden xs:flex flex-col items-center lg:flex-row lg:justify-between lg:items-end gap-5 h-1/2">
          <div className="flex flex-col gap-2 justify-center items-center lg:items-start xl:h-[210px] w-full lg:max-w-[200px] rounded-[32px] px-5 py-3 bg-lightGrey-100 dark:bg-dark-100 dark:border">
            <span className="font-[700]">بیش از</span>
            <span className="text-[28px] xl:text-[40px] font-[700]">
              ۷۰۰۰ +
            </span>
            <div className="flex">
              <AvatarGroup>
                <Avatar size="sm" src="/images/home/Rectangle 6485.png" />
                <Avatar size="sm" src="/images/home/Rectangle 6486.png" />
                <Avatar size="sm" src="/images/home/Rectangle 6487.png" />
                <Avatar size="sm" src="/images/home/Rectangle 6488.png" />
                <Avatar size="sm" src="/images/home/Rectangle 6489.png" />
              </AvatarGroup>
            </div>
            <span className="text-[14px] font-[600]">
              رضایت مشتریانی که به آلفا اعتماد کرده اند
            </span>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2 lg:h-[250px] xl:h-[287px] w-full lg:max-w-[200px] rounded-[32px] px-5 py-3 bg-[#DFDFFF] dark:bg-dark-100 dark:border">
            <span className="font-[700]">بیش از</span>
            <span className="text-[28px] xl:text-[40px] font-[700] truncate">
              ۸۵۰۰ +
            </span>
            <span className="text-[14px] font-[600]">
              منطقه برای رزرو، ویلا و کلبه
            </span>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2 lg:h-[300px] xl:h-[360px] w-full lg:max-w-[200px] rounded-[32px] px-5 py-3 bg-lightGrey-100 dark:bg-dark-100 dark:border">
            <span className="font-[700]">بیش از </span>
            <span className="text-[28px] xl:text-[40px] font-[700] truncate">
              ۹۰۰۰ +
            </span>
            <span className="text-[14px] font-[600]">
              ملک برای رزرو و رهن و اجاره
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
