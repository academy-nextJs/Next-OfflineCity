import { BsFillPinAngleFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { motion } from "framer-motion";
const DashboardBox = () => {
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
      <div className="flex gap-4">
        <div className="bg-[#ececec] dark:bg-zinc-700 w-[50px] h-[60px] mr-[19px] flex justify-center rounded-br-xl rounded-bl-xl  pt-6">
          <BsFillPinAngleFill className="text-black" size={23} />
        </div>
        <div className="pt-4">
          <p> 5 </p>
          <p> کا املاک ها </p>
        </div>
      </div>
      <div className="border-t-1 border-dashed border-[#888888] mx-[19px] mt-4 pt-4 pb-4 flex justify-between">
        <div className="">مشاهده</div>
        <div className="flex items-center gap-1 ">
          <BsFillCaretLeftFill size={14} className="opacity-30" />
          <BsFillCaretLeftFill size={18} className="opacity-60" />
          <BsFillCaretLeftFill size={23} className="opacity-100" />
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardBox;
