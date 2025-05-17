"useclient";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCoverflow, EffectCube, EffectFade, EffectFlip } from "swiper/modules";
import { motion } from "framer-motion";

const itemsVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 1,
      duration: 2,
    },
  }),
};

interface ImageSliderProps {
  images: string[];
}

const ImageSwiper: React.FC<ImageSliderProps> = ({ images }) => {
  const [showAll, setShowAll] = useState(false);

  const previewImages = images.slice(0, 5);



  return (
    <div className="w-full flex justify-center py-6 ">
      <div className="flex flex-col lg:flex-row-reverse  gap-2 mx-auto px-4  w-full max-w-[1280px]">
        <motion.div
          custom={0}
          variants={itemsVariant}
          initial="hidden"
          animate="visible"
          className="relative w-full lg:w-[900px] aspect-[900/462] rounded-[24px] overflow-hidden"
        >
          <Swiper
          effect="flip"
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
            modules={[Autoplay , EffectFlip]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView="auto"
            className="w-full h-[462px]"
          >
            {images.map((src, index) => (
              <SwiperSlide>
                <Image
                  src={src}
                  alt={`slide-${index}`}
                  fill
                  className="object-cover rounded-[24px] cursor-pointer "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div
          custom={1}
          variants={itemsVariant}
          initial="hidden"
          animate="visible"
          className=" grid grid-cols-2  gap-2  rounded-[24px] w-full lg:w-[656px]"
        >
          {previewImages.slice(1, 5).map((img, index) => (
            <div
              key={index}
              className="relative aspect-[400/290] rounded-[24px] overflow-hidden"
            >
              <Image
                src={img}
                alt={`Gallary ${index + 1}`}
                fill
                className="object-cover rounded-[24px] cursor-pointer "
              />
              {index === 3 && images.length > 5 && (
                <div
                  onClick={() => setShowAll(true)}
                  className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-sm font-bold  cursor-pointer rounded-[24px]"
                >
                  +{images.length - 5} عکس دیگر
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {showAll && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-wrap justify-center items-center p-4 z-50  overflow-auto w-screen h-screen">
            <button
              className="absolute top-4 right-4  text-white text-xl "
              onClick={() => setShowAll(false)}
            >
              x بستن
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              {images.map((img, i) => (
                <div key={i} className="relative w-72 aspect-square">
                  <Image
                    src={img}
                    alt={`full ${i}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSwiper;
