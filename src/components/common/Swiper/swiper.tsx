import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Skeleton } from "@heroui/skeleton";
import { relative } from "path";
import { easeOut, motion } from "framer-motion";

type SlideItem = {
  photos: string;
  title: string;
  description: string;
};

type data = {
  id: number;
  title: string;
  address: string;
  photos: string;
  price: number;
  rate: number;
};

type slidesPerViewProps = {
  slidesPerView: number;
  data: data[];
};

const slides: SlideItem[] = [
  {
    photos: "https://via.placeholder.com/300",
    title: "اول",
    description: "عکس اول",
  },
  {
    photos: "https://via.placeholder.com/600*400",
    title: "دوم",
    description: "عکس دوم",
  },
  {
    photos: "https://via.placeholder.com/600*400",
    title: "سوم",
    description: "عکس سوم",
  },
  {
    photos: "https://source.unsplash.com/random/800*400",
    title: "چهارم",
    description: "عکس چهارم",
  },
  {
    photos: "https://source.unsplash.com/random/800*400",
    title: "پنجم",
    description: "عکس پنجم",
  },
  {
    photos: "https://source.unsplash.com/random/800*400",
    title: "ششم",
    description: "عکس ششم",
  },
];

const ImageTextSlider = ({ slidesPerView, data }: slidesPerViewProps) => {
  const isLoading = !data || data.length === 0;
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        slidesPerGroup={2}
        slidesPerGroupSkip={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className=" "
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
          1536: {
            slidesPerView: 3,
          },
        }}
      >
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <SwiperSlide key={`skeleton-${i}`}>
                <Skeleton className="w-[344px] h-[345px]  rounded-lg " />
              </SwiperSlide>
            ))
          : data?.map((slide: any, index: any) => (
              <SwiperSlide key={index}>
                {slide.photos.length === 0 || !slide.photos ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                      position: "relative",
                      textAlign: "center",
                      width: "344px",
                      height: "345px",
                    }}
                  >
                    <img
                      src={slide?.photos[1]}
                      alt={slide.id}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Skeleton className="w-full h-80 rounded-[32px]" />
                  </motion.div>
                )}
                {/* <button className="bg-[#ffff] w-12 h-12 rounded-full relative top-[-305px] left-[-515px]">  hh  </button>   */}

                <div
                  className=""
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    color: "#fff",
                    fontWeight: "600px",
                    fontSize: "24px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                  }}
                >
                  <p className=""> {slide?.title} </p>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default ImageTextSlider;
