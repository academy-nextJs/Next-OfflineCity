import React from "react";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { motion } from "framer-motion";
const DashboardInformation = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        rotate: 1,
        boxShadow: "0  10px  30px rgba(0 , 0 , 0 , 0.2)",
        borderColor: "#8cff45"
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      }}
      style={{border: '2px solid transparent'}}
      className="bg-white rounded-[12px] dark:bg-zinc-900  group"
    >
      <div className="flex gap-2  pr-[19px] pt-[13px] pb-3">
        <PiNewspaperClippingFill size={20} />
        امار درامد ها
      </div>
      <div className=" border-t-1 border-dashed border-[#888888]  pb-[53px]">
        <div className="flex justify-between items-center pr-6 pl-5 pt-9 ">
          <div className="flex gap-2 ">
            {" "}
            <span className="w-4 h-4 rounded-full bg-[#8cff45] "> </span>{" "}
            <span className=""> درامد ماه جاری </span>{" "}
          </div>
          <span className="bg-[#8cff45] rounded-[12px] px-7 py-2 text-black">
            1150,00,000{" "}
          </span>
        </div>
        <div>
          <div className="flex justify-between items-center pr-6 pl-5 pt-9 ">
            <div className="flex gap-2 ">
              {" "}
              <span className="w-4 h-4 rounded-full bg-[#ececec] "> </span>{" "}
              <span className=""> درامد کل </span>{" "}
            </div>
            <span className="bg-[#ececec] rounded-[12px] px-7 py-2 text-black">
              1150,00,000{" "}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardInformation;
