import React, { useEffect, useState } from "react";
import HouseButton from "../common/HouseButton/HouseButton";
import HouseInformation from "../common/HouseInformation/HouseInformation";
import { HouseReserveInput } from "./HouseReserveInput";
import HouseAbout from "./HouseAbout";
import DetailComments from "../common/DetailComments/DetailComments";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/services/interceptor/axios";
import BlueButton from "../common/BlueButton/BlueButton";
import CustomPlugin from "../common/CustomPlugin/CustomPlugin";
import HouseInformationMobile from "../common/HouseInformationMobile/HouseInformationMobile";
import { GoPlus } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import CommentsMobileModal from "../common/CommentsModal/CommentsModal";
import CreateCommentsModal from "../common/CreateComments/CreateCommentsModal";

const containerVarients = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const HouseReserveContainer = () => {
  const [ShowComments, setShowComments] = useState<boolean>(false);
  const [animate, setAnimate] = useState<"hidden" | "visible">("hidden");

  const { data: Comments } = useQuery({
    queryKey: ["comments"],
    queryFn: () => axiosInstance.get("/houses/5/comments?page=1&limit=10"),
  });

  console.log(Comments, "commentsdata");

  const [discountHouse, setDiscountHouse] = useState<any>();

  const GetDiscountHome = async () => {
    const res = await axiosInstance.get(
      "/houses?page=1&limit=10&sort=rate&order=ASC&search=&location=&propertyType=&transactionType=&minPrice=&maxPrice=&minRent=&maxRent=&minMortgage=&maxMortgage=&minArea=&maxArea="
    );

    setDiscountHouse(res?.data);
  };

  useEffect(() => {
    GetDiscountHome();
    setAnimate("visible");
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-[113px]">
        <div>
          <div className="hidden md:block">
            <HouseButton
              label="امکانات هتل"
              className=" w-[133px] h-[45px] flex items-center justify-center rounded-[100px] text-[#7575fefe] border border-[#7575fefe] "
            />
          </div>
          <div>
            <HouseInformationMobile />
            <HouseInformation />
          </div>
          <div>
            <HouseReserveInput />
          </div>
        </div>
        <div>
          <div>
            <HouseAbout />
          </div>

          <div className="hidden md:block pt-12">
            <div className="flex gap-5">
              <button
                onClick={() => setShowComments(!ShowComments)}
                className="w-[136px] h-[45px] flex items-center justify-center rounded-[100px] text-[#7575fefe] border border-[#7575fefe]"
              >
                نظرات کاربران
              </button>
              <div className="flex gap-2  items-center justify-center ">
                <span className="text-[#7575fefe]">
                  {" "}
                  <GoPlus />{" "}
                </span>{" "}
                <button className="text-[#7575fefe]">     <CreateCommentsModal title="نظر شما" /> </button>
              </div>
            </div>
            <div>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={ShowComments ? "visible" : "hidden"}
                  variants={containerVarients}
                  initial="hidden"
                  animate={animate}
                  exit="hidden"
                  className="mt-4 "
                >
                  {Comments?.data.filter((e:any) => e.rating > 4.3).map((Comments: any) =>
                    ShowComments ? <DetailComments Commets={Comments} /> : null
                  )}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
          <div>
            <CommentsMobileModal Commets={Comments?.data} />
          </div>
        </div>
      </div>
      <div className=" mx-auto md:mx-0 pt-[84px] pb-[64px] ">
        <div className="">
          <BlueButton
            children="اگهی های مشابه"
            className="border border-[#7575fefe] text-[#7575fefe] bg-transparent "
          />
        </div>
        <div className="pt-6">
          <CustomPlugin
            showDiscount={true}
            showPrice={true}
            data={discountHouse}
          />
        </div>
      </div>
    </>
  );
};

export default HouseReserveContainer;
