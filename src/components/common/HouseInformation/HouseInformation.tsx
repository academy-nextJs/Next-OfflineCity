import React from "react";
import { motion } from "framer-motion";

const itemsVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 1.3,
    },
  }),
};

const HouseInformation = () => {
  return (
    <div className="hidden md:grid md:grid-cols-5 gap-12 pt-6">
      <motion.div
        custom={0}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> تعداد اتاق </p>
        <p> 4 اتاق </p>
      </motion.div>
      <motion.div
        custom={1}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> گرمایش </p>
        <p> شوفاژ </p>
      </motion.div>
      <motion.div
        custom={2}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> سرمایش </p>
        <p> کولر </p>
      </motion.div>
      <motion.div
        custom={3}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> بالکن </p>
        <p> دارد </p>
      </motion.div>
      <motion.div
        custom={4}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> اجاق گاز </p>
        <p> دارد </p>
      </motion.div>
      <motion.div
        custom={5}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> پارگینگ </p>
        <p> دارد </p>
      </motion.div>
      <motion.div
        custom={6}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> اسانسور </p>
        <p> دارد </p>
      </motion.div>
      <motion.div
        custom={7}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> حمام </p>
        <p> دارد </p>
      </motion.div>
      <motion.div
        custom={8}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> نوع حمام </p>
        <p> رومی </p>
      </motion.div>
      <motion.div
        custom={9}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> سم بنا </p>
        <p> نوساز </p>
      </motion.div>
      <motion.div
        custom={10}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> نوع اوپن </p>
        <p> سنگی </p>
      </motion.div>
      <motion.div
        custom={11}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="border-r border-[#7575fefe] pr-2 mt-8 "
      >
        <p className="text-[#7575fefe]"> خط تلفن </p>
        <p> دارد </p>
      </motion.div>
    </div>
  );
};

export default HouseInformation;
