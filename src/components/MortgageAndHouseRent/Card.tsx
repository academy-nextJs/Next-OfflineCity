import { HouseProps } from "@/types";
import { Image } from "@heroui/react";
import Link from "next/link";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MortgageAndHouseRentCard: FC<HouseProps> = ({
  id,
  photos,
  title,
  rate,
  address,
  rooms,
  parking,
  bathrooms,
  price,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 rounded-xl">
      <div className="w-full lg:w-[50%] xl:w-[44%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {photos.map((photo) => (
            <SwiperSlide>
              <Image
                classNames={{ img: "w-full xl:h-[230px]" }}
                src={photo || "/images/home/image 1.png"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-4 lg:gap-0 justify-between items-start lg:w-[50%] xl:w-[56%]">
        <h4 className="xs:text-[20px] font-bold">{title}</h4>
        <span className="flex gap-1 items-center bg-main text-white rounded-full px-2 py-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6686 5.21224C11.8066 4.92945 12.1934 4.92946 12.3314 5.21224L13.1449 6.87977C13.1989 6.99045 13.3003 7.06748 13.4178 7.08702L15.1862 7.38121C15.4859 7.43107 15.6054 7.81472 15.391 8.03919L14.125 9.36512C14.0412 9.45296 14.0025 9.57735 14.021 9.6999L14.3 11.5504C14.3473 11.8638 14.0345 12.101 13.7638 11.957L12.1688 11.1083C12.0628 11.0518 11.9372 11.0518 11.8312 11.1083L10.2362 11.957C9.96554 12.101 9.65271 11.8638 9.69996 11.5504L9.979 9.6999C9.99748 9.57735 9.95882 9.45296 9.87495 9.36512L8.60896 8.03919C8.39464 7.81472 8.51408 7.43107 8.8138 7.38121L10.5822 7.08702C10.6997 7.06748 10.8011 6.99045 10.8551 6.87977L11.6686 5.21224Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 16.3424L14.6264 20.6513C14.9541 21.5195 15.118 21.9536 15.403 22C15.6887 21.9578 16.0387 21.4804 16.3808 20.6172C16.6258 19.9991 16.7482 19.6901 17.0005 19.5235C17.0779 19.4724 17.1625 19.432 17.252 19.4035C17.5436 19.3108 17.879 19.4015 18.5497 19.5828C19.2669 19.7767 19.7651 19.7226 19.9618 19.5828C20.0197 19.5417 19.9618 19.5797 19.9618 19.5797C20.0776 19.3743 19.9213 19.0539 19.6088 18.4131L17.4561 14"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 16.3421L9.3736 20.6503C9.0459 21.5183 8.72171 21.9536 8.43671 22C8.15097 21.9578 7.97992 21.5263 7.63781 20.6632C7.39287 20.0453 7.25175 19.6893 6.99948 19.5226C6.92213 19.4715 6.83745 19.4312 6.74803 19.4027C6.45638 19.31 6.12101 19.4007 5.45027 19.582C4.73308 19.7758 4.2349 19.7186 4.03815 19.5788C3.92237 19.3735 4.07866 19.0531 4.39123 18.4124L6.54387 14"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {rate} ستاره
        </span>
        <div className="hidden sm:flex gap-2 items-center">
          <span className="bg-[#F3F3F3] rounded-full p-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_892_2644)">
                <path
                  d="M18.3337 8.33335V7.68126C18.3337 6.06491 18.3337 5.25675 17.8455 4.7546C17.3573 4.25247 16.5717 4.25247 15.0003 4.25247H13.2682C12.5037 4.25247 12.4973 4.25099 11.8099 3.90697L9.03358 2.51764C7.87436 1.93755 7.29476 1.64751 6.67731 1.66767C6.05985 1.68783 5.4993 2.01509 4.3782 2.66961L3.35498 3.267C2.53148 3.74776 2.11973 3.98815 1.89336 4.38805C1.66699 4.78796 1.66699 5.27496 1.66699 6.24896V13.0964C1.66699 14.3762 1.66699 15.0161 1.95221 15.3723C2.142 15.6092 2.40796 15.7685 2.70199 15.8214C3.14388 15.9007 3.68489 15.5849 4.76688 14.9531C5.50163 14.5242 6.20875 14.0787 7.08772 14.1995C7.82423 14.3007 8.50866 14.7654 9.16699 15.0949"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66699 1.66669V14.1667"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 4.16669V7.91669"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.2566 18.0696C15.0759 18.2388 14.8344 18.3333 14.5831 18.3333C14.3318 18.3333 14.0903 18.2388 13.9096 18.0696C12.2549 16.5108 10.0376 14.7696 11.1189 12.2415C11.7036 10.8747 13.1071 10 14.5831 10C16.0591 10 17.4626 10.8747 18.0473 12.2415C19.1273 14.7663 16.9153 16.5162 15.2566 18.0696Z"
                  stroke="#595959"
                  stroke-width="1.5"
                />
                <path
                  d="M14.583 13.75H14.5905"
                  stroke="#595959"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_892_2644">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          {address}
        </div>
        <div className="hidden xs:flex flex-wrap lg:flex-nowrap items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="bg-[#F3F3F3] rounded-full p-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3337 14.5833H1.66699"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3337 17.5V13.3333C18.3337 11.762 18.3337 10.9763 17.8455 10.4882C17.3573 10 16.5717 10 15.0003 10H5.00033C3.42898 10 2.6433 10 2.15515 10.4882C1.66699 10.9763 1.66699 11.762 1.66699 13.3333V17.5"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3337 10V8.84817C13.3337 8.42525 13.2574 8.28378 12.8667 8.11708C12.0529 7.76991 11.0652 7.5 10.0003 7.5C8.93549 7.5 7.94773 7.76991 7.13399 8.11708C6.74328 8.28378 6.66699 8.42525 6.66699 8.84817V10"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M2.5 10V7.5C2.5 6.32149 2.5 5.73223 2.86612 5.36612C3.23223 5 3.82149 5 5 5C5.22896 5 5.54738 5.0606 5.75235 4.9501C5.84492 4.90021 5.92791 4.77407 6.09391 4.5218C6.89101 3.31039 8.5205 2.5 10 2.5C11.4795 2.5 13.109 3.31039 13.9061 4.5218C14.0721 4.77407 14.1551 4.90021 14.2477 4.9501C14.4527 5.0606 14.771 5 15 5C16.1785 5 16.7677 5 17.1339 5.36612C17.5 5.73223 17.5 6.32149 17.5 7.5V10"
                  stroke="#595959"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            {rooms} خواب
          </div>
          <div className="flex items-center gap-1">
            <span className="bg-[#F3F3F3] rounded-full p-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3337 17.5V8.00887C18.3337 6.90642 18.3337 6.3552 18.0471 5.92829C17.7606 5.50139 17.2532 5.29667 16.2383 4.88723L11.2383 2.86997C10.627 2.62332 10.3213 2.5 10.0003 2.5C9.67933 2.5 9.37366 2.62332 8.76232 2.86997L3.76236 4.88723C2.74752 5.29667 2.2401 5.50139 1.95355 5.92829C1.66699 6.3552 1.66699 6.90642 1.66699 8.00887V17.5"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3337 15.8333V17.5M6.66699 15.8333V17.5"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.25 11.6666L6.45212 10.8582C6.75527 9.64556 6.90684 9.03931 7.35894 8.68631C7.81104 8.33331 8.436 8.33331 9.68592 8.33331H10.3141C11.564 8.33331 12.1889 8.33331 12.6411 8.68631C13.0932 9.03931 13.2447 9.64556 13.5479 10.8582L13.75 11.6666"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1667 11.6667H5.83333C5.3731 11.6667 5 12.0398 5 12.5V15C5 15.4603 5.3731 15.8334 5.83333 15.8334H14.1667C14.6269 15.8334 15 15.4603 15 15V12.5C15 12.0398 14.6269 11.6667 14.1667 11.6667Z"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.08301 13.7416V13.75"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.917 13.7416V13.75"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {parking} پارکینگ
          </div>
          <div className="flex items-center gap-1">
            <span className="bg-[#F3F3F3] rounded-full p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00033 16.6667L4.16699 17.5M15.0003 16.6667L15.8337 17.5"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M2.5 10V10.8333C2.5 13.5832 2.5 14.9581 3.35427 15.8124C4.20854 16.6667 5.58347 16.6667 8.33333 16.6667H11.6667C14.4165 16.6667 15.7914 16.6667 16.6457 15.8124C17.5 14.9581 17.5 13.5832 17.5 10.8333V10"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.66699 10H18.3337"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3.33301 10V4.60283C3.33301 3.44147 4.27448 2.5 5.43584 2.5C6.36772 2.5 7.18846 3.11332 7.4525 4.00701L7.49967 4.16667"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M6.66699 4.99998L8.75033 3.33331"
                  stroke="#595959"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            {bathrooms} حمام
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
          <p className="text-[12px]">
            <strong className="text-[16px] xs:text-xl">
              {Number(price).toLocaleString()}
            </strong>
            تومان
          </p>
          <Link
            className="text-main flex items-center gap-2 xl:gap-5"
            href={`/mortgage-and-house-rent/${id}`}
          >
            مشاهده جزئیات
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49996 11.5C6.49996 11.5 1.5 7.81758 1.5 6.5C1.5 5.18233 6.5 1.5 6.5 1.5"
                stroke="#7575FE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MortgageAndHouseRentCard;
