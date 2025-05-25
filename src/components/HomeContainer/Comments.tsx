"use client";
import React from "react";
import CommentsSlider from "../common/CommentSlider/CommentSlider";
import BlueButton from "../common/BlueButton/BlueButton";
import { motion } from "framer-motion";
const Comments = () => {
  return (
    <div className="  pt-10">
      <div className="pt-10">
        <BlueButton
          children=" نظرات کاربران"
          className="text-[#7575FE] border-1 border-[#7575FE] bg-transparent"
        />
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
        className="pt-4"
      >
        <p className="font-[700] text-[32px]"> نطرات کاربراندرباره الفا </p>
        <p className="text-base text-[#555555] pt-4">
          {" "}
          تبم دلتا با ارایه بهترین نیروهای خدماتی و سرویس های <br /> املاکی سعی
          دارد تا بتواند در تمام لحظات کناز شما باشد{" "}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="pt-[90px] pb-[109px]"
      >
        <CommentsSlider />
      </motion.div>
    </div>
  );
};

export default Comments;
