"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setLocation,
  setMaxArea,
  setMaxMortgage,
  setMaxPrice,
  setMaxRent,
  setMinArea,
  setMinMortgage,
  setMinPrice,
  setMinRent,
  setOrder,
  setPropertyType,
  setSearch,
  setSort,
  setTransactionType,
} from "@/redux/slices/houses";
import { Location } from "@/types";
import axiosInstance from "@/utils/services/interceptor/axios";
import { Input, Select, SelectItem } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

const Inputs = () => {
  const housesValues = useAppSelector((store) => store.houses);
  const dispatch = useAppDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { data } = useQuery({
    queryKey: ["locations"],
    queryFn: () => axiosInstance.get("/locations"),
  });

  return (
    <>
      <div className="flex flex-wrap flex-col md:flex-row items-center gap-6">
        <Input
          defaultValue={housesValues.search}
          placeholder="جستجو کنید ..."
          label="جستجو"
          labelPlacement="outside"
          className="w-full md:w-[350px]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 px-0 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          ref={searchInputRef}
          onChange={(e) => {
            if (!e.target.value) {
              dispatch(setSearch(""));
            }
          }}
          onKeyUp={(e) => {
            if (e.key == "Enter" && searchInputRef.current?.value) {
              dispatch(setSearch(searchInputRef.current.value));
            }
          }}
          startContent={
            <div className="bg-main h-full w-14 rounded-full flex items-center justify-center me-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 9H6.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 14H6.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 4H18.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.5355 17.0355L21.5 20M20 13.5C20 10.7386 17.7614 8.5 15 8.5C12.2386 8.5 10 10.7386 10 13.5C10 16.2614 12.2386 18.5 15 18.5C17.7614 18.5 20 16.2614 20 13.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          }
        />

        <Select
          selectedKeys={[`${housesValues.sort},${housesValues.order}`]}
          placeholder="انتخاب کنید"
          label="مرتب سازی بر اساس"
          labelPlacement="outside"
          className="w-full md:w-[208px]"
          classNames={{
            trigger:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          onChange={(e) => {
            dispatch(setSort(e.target.value.split(",")[0]));
            dispatch(setOrder(e.target.value.split(",")[1]));
          }}
        >
          <SelectItem key="rate,DESC">محبوب ترین</SelectItem>
          <SelectItem key="price,DESC">گران ترین</SelectItem>
          <SelectItem key="price,ASC">ارزان ترین</SelectItem>
        </Select>

        <Select
          items={
            data?.data.map((item: Location) => ({
              key: item.id,
              label: item.area_name,
            })) || []
          }
          placeholder="انتخاب کنید"
          label="محل مورد نظر"
          labelPlacement="outside"
          className="w-full md:w-[208px]"
          classNames={{
            trigger:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 rounded-full h-12",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setLocation(e.target.value))}
        >
          {(item: { label: string; key: string }) => (
            <SelectItem key={item.label.split("،")[0]}>{item.label}</SelectItem>
          )}
        </Select>

        <Select
          selectedKeys={[housesValues.propertyType]}
          placeholder="انتخاب کنید"
          label="نوع ملک"
          labelPlacement="outside"
          className="w-full md:w-[208px]"
          classNames={{
            trigger:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 rounded-full h-12",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setPropertyType(e.target.value))}
        >
          <SelectItem key="آپارتمان">آپارتمان</SelectItem>
          <SelectItem key="ویلا">ویلا</SelectItem>
          <SelectItem key="روستایی">روستایی</SelectItem>
        </Select>

        <Select
          selectedKeys={[housesValues.transactionType]}
          placeholder="انتخاب کنید"
          label="نوع معامله"
          labelPlacement="outside"
          className="w-full md:w-[208px]"
          classNames={{
            trigger:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 rounded-full h-12",
            label: "py-2 font-bold",
          }}
          onChange={(e) => {
            if (!e.target.value) {
              dispatch(setTransactionType("rental"));
            } else {
              dispatch(setTransactionType(e.target.value));
            }
          }}
        >
          <SelectItem key="rental">اجاره</SelectItem>
          <SelectItem key="mortgage">رهن</SelectItem>
          <SelectItem key="direct_purchase">خرید مستقیم</SelectItem>
        </Select>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row gap-6">
        <Input
          defaultValue={housesValues.minPrice}
          label="حداقل قیمت"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-full md:w-[208px]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setMinPrice(e.target.value))}
        />
        <Input
          defaultValue={housesValues.maxPrice}
          label="حداکثر قیمت"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-full md:w-[208px]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setMaxPrice(e.target.value))}
        />
        <div className="hidden xl:block pt-9">
          <svg
            width="1"
            height="24"
            viewBox="0 0 1 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="2.18557e-08"
              x2="0.499999"
              y2="24"
              stroke="#E0E0E0"
            />
          </svg>
        </div>
        <Input
          defaultValue={housesValues.minRent}
          label="حداقل اجاره"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-full md:w-[208px]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setMinRent(e.target.value))}
        />
        <Input
          defaultValue={housesValues.maxRent}
          label="حداکثر اجاره"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-full md:w-[208px]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setMaxRent(e.target.value))}
        />
        <div className="hidden xl:block pt-9">
          <svg
            width="1"
            height="24"
            viewBox="0 0 1 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="2.18557e-08"
              x2="0.499999"
              y2="24"
              stroke="#E0E0E0"
            />
          </svg>
        </div>
        <Input
          defaultValue={housesValues.minMortgage}
          label="حداقل رهن"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-full md:w-[208px]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setMinMortgage(e.target.value))}
        />
        <Input
          defaultValue={housesValues.maxMortgage}
          label="حداکثر رهن"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-full md:w-[208px]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setMaxMortgage(e.target.value))}
        />
        <div className="hidden xl:block pt-9">
          <svg
            width="1"
            height="24"
            viewBox="0 0 1 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="2.18557e-08"
              x2="0.499999"
              y2="24"
              stroke="#E0E0E0"
            />
          </svg>
        </div>
        <Input
          defaultValue={housesValues.minArea}
          label="حداقل متراژ"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-full md:w-[208px]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setMinArea(e.target.value))}
        />
        <Input
          defaultValue={housesValues.maxArea}
          label="حداکثر متراژ"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-full md:w-[208px]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setMaxArea(e.target.value))}
        />
      </div>
    </>
  );
};

export default Inputs;
