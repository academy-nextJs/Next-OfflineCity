import React, { FC } from "react";
import { FaShareAlt } from "react-icons/fa";
import { TbPinFilled } from "react-icons/tb";
import { FaRegMap } from "react-icons/fa6";

interface Iprops {
  title: string;
  address: string;
}

const HouseReserveTitle = ({ title, address }: Iprops) => {
  return (
    <div className="flex justify-between ">
      <div>
        <p className="font-bold text-[32px]">{title}</p>
        <p className="flex gap-2 pr-4">  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f3f3f3]"> <FaRegMap size={18}/> </span> {address}</p>
      </div>

      <div className="flex gap-3 ">
        <div className="w-12 h-12 rounded-full bg-[#7575fefe] flex items-center justify-center text-white">
          <FaShareAlt size={22} />
        </div>

        <div className="w-12 h-12 rounded-full flex items-center justify-center border">
          <TbPinFilled size={22} />
        </div>
      </div>
    </div>
  );
};

export default HouseReserveTitle;
