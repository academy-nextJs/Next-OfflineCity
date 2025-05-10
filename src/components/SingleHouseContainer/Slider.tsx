"use client";

import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Photos {
  photos: string[];
}

const ImageSlider: FC<Photos> = ({ photos }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        style={{ direction: "ltr" }}
        className="grid gap-4 grid-cols-1 lg:grid-cols-2"
      >
        <div className="w-full h-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-2xl h-full"
          >
            {photos.slice(0, 3).map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={photo}
                    classNames={{ img: "h-full", wrapper: "h-full" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden [direction:ltr] xs:grid gap-4 grid-cols-1 sm:grid-cols-2">
          {photos.slice(0, 3).map((photo) => (
            <div>
              <Image
                src={photo}
                classNames={{ img: "h-full", wrapper: "h-full" }}
              />
            </div>
          ))}
          {photos.length > 3 ? (
            <div className="relative cursor-pointer" onClick={onOpen}>
              <Image src={photos[3]} classNames={{ wrapper: "opacity-50" }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                <p className="text-white text-[18px]">
                  بازدید {photos.length - 1}+ عکس دیگر
                </p>
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.50004 1.5C1.50004 1.5 6.5 5.18242 6.5 6.5C6.5 7.81767 1.5 11.5 1.5 11.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        size="xl"
        placement="center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                مشاهده عکس‌ها
              </ModalHeader>
              <ModalBody>
                <div className="w-full h-full">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop
                    className="rounded-2xl h-full"
                  >
                    {photos.map((photo, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                          <Image
                            src={photo}
                            classNames={{ img: "h-full", wrapper: "h-full" }}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  بستن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageSlider;
