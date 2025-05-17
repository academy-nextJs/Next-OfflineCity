import React from "react";
import BlueButton from "../common/BlueButton/BlueButton";
import { Image } from "@heroui/react";
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

const HouseAbout = () => {
  return (
    <div className="hidden md:block">
      <div>
        <BlueButton
          children="درباره هتل"
          className="text-[#7575fefe] border border-[#7575fefe] bg-transparent"
        />
      </div>
      <div className="dark:text-zinc-400">
        <motion.h1
          custom={0}
          variants={itemsVariant}
          whileInView='visible'
          viewport={{once : true , amount : 0.3}}
          initial="hidden"
          className="pt-6 font-[600] text-[24px]"
        >
          {" "}
          چرا باید این خونه را اتخاب کنیم{" "}
        </motion.h1>
        <motion.p
          custom={1}
          variants={itemsVariant}
          whileInView='visible'
          viewport={{once : true , amount : 0.3}}
          initial="hidden"
          className="pt-5 text-[#323232]"
        >
          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
          از طراحان گرافیک است،
          <br /> چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
          است، و برای شرایط فعلی تکنولوژی
          <br /> مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
          باشد، کتابهای زیادی در شصت و سه
          <br /> درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را <br />
          برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد، در این صورت می توان امید <br />
          داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
          پایان رسد و زمان مورد نیاز شامل <br />
          حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.
        </motion.p>
      </div>
      <div className="flex gap-4 pt-8">
        <motion.div
          custom={2}
          variants={itemsVariant}
          whileInView='visible'
          viewport={{once : true , amount : 0.3}}
          initial="hidden"
          className=""
        >
          <Image
            isZoomed
            alt="HeroUI Fruit Image with Zoom"
            src={"/assets/houseReserve/house16.png"}
            width={319}
            height={229}
          />
        </motion.div>
        <motion.div
          custom={3}
          variants={itemsVariant}
          whileInView='visible'
          viewport={{once : true , amount : 0.3}}
          initial="hidden"
          className=""
        >
          <Image
            isZoomed
            alt="HeroUI Fruit Image with Zoom"
            src={"/assets/houseReserve/house16.png"}
            width={319}
            height={229}
          />
        </motion.div>
      </div>
      <div>
        <div className="dark:text-zinc-400">
          <motion.h1
            custom={4}
            variants={itemsVariant}
            whileInView='visible'
            viewport={{once : true , amount : 0.3}}
            initial="hidden"
            className="pt-6 font-[600] text-[24px]"
          >
            {" "}
            چرا باید این خونه را اتخاب کنیم{" "}
          </motion.h1>
          <motion.p
            custom={5}
            variants={itemsVariant}
            whileInView='visible'
            viewport={{once : true , amount : 0.3}}
            initial="hidden"
            className="pt-5 text-[#323232]"
          >
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
            <br /> چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است، و برای شرایط فعلی تکنولوژی
            <br /> مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
            باشد، کتابهای زیادی در شصت و سه
            <br /> درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
            طلبد، تا با نرم افزارها شناخت بیشتری را <br />
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد، در این صورت می توان امید <br />
            داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
            پایان رسد و زمان مورد نیاز شامل <br />
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HouseAbout;
