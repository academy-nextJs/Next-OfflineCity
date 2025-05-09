import BreadCrumbsComponents from "@/components/common/BreadCrumbs/BreadCrumbs";
import React, { FC, useRef, useState } from "react";
import HouseSearchModal from "./HouseSearchModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Input } from "@heroui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiBellSimpleRinging } from "react-icons/pi";
import { TfiMapAlt } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { setPosition } from "@/redux/slices/mapSlice";
import { HouseProps } from "@/types";
import { setHouseSearch } from "@/redux/slices/houseReserve";
import { MapPin } from "lucide-react";
import Link from "next/link";


interface MapViewProps {
  houses: HouseProps[];
}

const HouseList: FC<MapViewProps> = ({ houses }) => {
  const housesValues = useAppSelector((store) => store.housereserve); 
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  return (
    <>
      <div className="hidden md:flex flex-col gap-3 absolute top-0 right-0 max-w-[540px] h-screen overflow-y-auto z-10 space-y-3 rounded-l-[32px] bg-[#ffff] dark:bg-dark-200 pr-[56px] ">
        <div className="w-full pt-[55px] ">
          <BreadCrumbsComponents />
        </div>
        <div className="flex gap-4 pt-1">
          <HouseSearchModal />
          <Input
            defaultValue={housesValues.search}
            placeholder="جستجو کنید ..."
            labelPlacement="outside"
            className="w-full md:w-[351px]"
            classNames={{
              inputWrapper:
                "bg-lightGrey-100 dark:bg-dark-100 dark:border dark:border-zinc-600 data-[hover]:bg-lightGrey-200 px-0 h-12 rounded-full",
            }}
            ref={searchInputRef}
            onChange={(e) => {
              if (!e.target.value) {
                dispatch(setHouseSearch(""));
              }
            }}
            onKeyUp={(e) => {
              if (e.key == "Enter" && searchInputRef.current?.value) {
                dispatch(setHouseSearch(searchInputRef.current.value));
              }
            }}
            startContent={
              <div className="bg-main h-full w-14 rounded-full flex items-center justify-center me-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9H6.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 14H6.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 4H18.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5355 17.0355L21.5 20M20 13.5C20 10.7386 17.7614 8.5 15 8.5C12.2386 8.5 10 10.7386 10 13.5C10 16.2614 12.2386 18.5 15 18.5C17.7614 18.5 20 16.2614 20 13.5Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-6 pt-2 pl-[14px] pb-8">
          {houses.map((house) => (
            <>
              <div className="rounded-2xl overflow-hidden shdow-md bg-white dark:bg-zinc-800  max-auto dark:border dark:border-zinc-600">
                <div className="relative rounded-[24px]">
                  {/* <Image src={house.photos[0]} alt={house.title} width={400} height={250} className='w-full h-48 object-cover bg-red-200'/>  */}
                  <img
                    src={house.photos[0] === '' ? house.photos[0] : '/assets/houseReserve/house.png'}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-[24px] "
                  />
                  <div className="absolute top-2 left-2 font-[700] text-[14px] bg-[#7575fe] text-white text-xspx-2 py-1 rounded-full flex items-center space-x-1 ">
                    <AiOutlineHeart size={20} />
                    <span> {house.rate} </span>
                  </div>

                  <div className="absolute top-2 left-[58px] bg-red-500 text-white text-xs px-2 py-2 font-bold text-[14px] rounded-full">
                    %15 -
                  </div>

                  <div className="absolute bottom-2 left-2 group" dir="ltr">
                    <div className="flex items-center space-x-1">
                      <div
                        className="bg-[#7575fe] text-white text-xs p-2  rounded-full cursor-pointer"
                        onClick={() =>
                          dispatch(
                            setPosition({
                              lat: house.location.lat,
                              lng: house.location.lng,
                            })
                          )
                        }
                      >
                        <MapPin className="text-white w-5 h-5" />
                      </div>
                      <span className="bg-[#7575fe] text-white text-xs px-2  py-1 rounded-full opacity-0 scale-95  group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                        نمایش داخل نقشه
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <h3 className="font-bold text-[18px] pt-4">
                    {" "}
                    {house.title}{" "}
                  </h3>
                  <div className="flex items-center space-x-2 text-[14px] text-[#000000] dark:text-gray-400 pt-4">
                    <div className=" rounded-full bg-[#f3f3f3] dark:bg-zinc-600 flex items-center justify-center">
                      <TfiMapAlt size={21} />
                    </div>
                    <span className="pr-2 truncate w-64">{house.address}</span>
                    <div className=" rounded-full bg-[#f3f3f3] dark:bg-zinc-600 flex items-center justify-center ">
                      <PiBellSimpleRinging size={21} />
                    </div>
                    <span className="text-black dark:text-slate-300 flex gap-1">
                      {" "}
                      <span>{house.capacity} </span> <span> شب</span>{" "}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="pt-4">
                      <div className="relative inline-block text-[#A6A6A6] font-bold opacity-50">
                        {house?.price} تومان
                        <span className="absolute top-2 right-0 left-0 bottom-0 w-full h-px bg-red-600 transform rotate-[-14deg] origin-center">
                          {" "}
                        </span>
                      </div>
                      /
                      <span className="font-bold text-black text-[16px] inline dark:text-slate-300 ">
                        {" "}
                         {house?.price} 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default HouseList;
