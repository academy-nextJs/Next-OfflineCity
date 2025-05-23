interface IProps {
  title: string;
  address: string;
}

function Title({ title, address }: IProps) {
  return (
    <div className="flex flex-col gap-5 mt-8">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-4">
        <p className="text-[32px] font-bold">{title}</p>
        <div className="flex gap-3">
          <span className="bg-main w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4.5C5.50442 5.70104 3 8.94175 3 12.7511C3 13.9579 3.25134 15.1076 3.70591 16.1534M15 4.5C18.4956 5.70104 21 8.94175 21 12.7511C21 13.7736 20.8195 14.7552 20.4879 15.6674M16.5 20.3296C15.1762 21.074 13.6393 21.5 12 21.5C10.3607 21.5 8.82378 21.074 7.5 20.3296"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </span>

          <span className="border-2 border-main w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z"
                stroke="#7575FE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <span className="dark:bg-white border-2 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 14.5L14.5 9.49994"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M16.8463 14.6095L19.4558 12C21.5147 9.94106 21.5147 6.60296 19.4558 4.54409C17.397 2.48522 14.0589 2.48522 12 4.54409L9.39045 7.15364M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39039"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <p className="flex gap-2 items-center">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2572_580)">
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
              <clipPath id="clip0_2572_580">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        {address}
      </p>
    </div>
  );
}

export default Title;
