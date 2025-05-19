import { useAppSelector } from "@/redux/hooks";
import { setPosition } from "@/redux/slices/mapSlice";
import { HouseProps } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiBellSimpleRinging } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";
import { TfiMapAlt } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

interface MapViewProps {
  houses: HouseProps[];
}
const HouseListMobile: FC<MapViewProps> = ({ houses }) => {
  const dispatch = useDispatch();
  const housesValues = useAppSelector((store) => store.houses);
  return (
    <div className="md:hidden grid grid-cols-2 gap-6 pt-8 pl-[14px] pb-4">
      {houses.map((house) => (
        <>
          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: 1,
              boxShadow: "0  10px  30px rgba(0 , 0 , 0 , 0.2)",
              backgroundColor: "#7575fefe",
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              mass: 0.8,
            }}
            className="rounded-2xl overflow-hidden shdow-md bg-white dark:bg-zinc-800  max-auto dark:border dark:border-zinc-600"
          >
            <div className="relative bg-blue-500 rounded-[24px]">
              {/* <Image src={house.photos[0]} alt={house.title} width={400} height={250} className='w-full h-48 object-cover bg-red-200'/>  */}
              <img
                src={
                  house.photos[0] === ""
                    ? house.photos[0]
                    : "/assets/houseReserve/house.png"
                }
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-[24px] "
              />
              <div className="absolute top-2 left-2 font-[700] text-[14px] bg-[#7575fe] text-white text-xspx-2 py-1 rounded-full flex items-center space-x-1 ">
                <AiOutlineHeart size={20} />
                <span> {house.rate} </span>
              </div>

              <div className="absolute top-2 left-[58px] bg-red-500 text-white text-xs px-2 py-2 font-[700] text-[14px] rounded-full">
                %15 -
              </div>

              <div className="absolute bottom-2 left-2 group" dir="ltr">
                <div className="flex items-center space-x-1">
                  <div
                    className="bg-violet-600 text-white text-xs p-2  rounded-full cursor-pointer"
                    onClick={() =>
                      dispatch(
                        setPosition({
                          lat: house.location.lat,
                          lng: house.location.lng,
                        })
                      )
                    }
                  >
                    <SiGooglemaps className="text-white w-5 h-5" />
                  </div>
                  <span className="bg-violet-600 text-white text-xs px-2  py-1 rounded-full opacity-0 scale-95  group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    نمایش داخل نقشه
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 space-y-1 text-sm text-gray-800 dark:text-gray-200">
              <h3 className="font-bold text-[18px] pt-4"> {house.title} </h3>
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
                  <span className="font-bold text-black text-[16px] inline dark:text-slate-300">
                    {" "}
                    {house?.price} تومان{" "}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ))}
    </div>
  );
};

export default HouseListMobile;
