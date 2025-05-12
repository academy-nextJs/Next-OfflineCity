import React from "react";
import HouseButton from "../common/HouseButton/HouseButton";
import HouseInformation from "../common/HouseInformation/HouseInformation";
import { HouseReserveInput } from "./HouseReserveInput";

const HouseReserveContainer = () => {
  return (
    <div className="flex">
      <div>
        <div>
          <HouseButton
            label="امکانات هتل"
            className=" w-[133px] h-[45px] flex items-center justify-center rounded-[100px] text-[#7575fefe] border border-[#7575fefe] "
          />
        </div>
        <div>
            <HouseInformation />
        </div>
        <div>
            <HouseReserveInput />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HouseReserveContainer;
