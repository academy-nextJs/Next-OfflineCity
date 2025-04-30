"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setTransactionType } from "@/redux/slices/global";
import { Location } from "@/types";
import axiosInstance from "@/utils/services/interceptor/axios";
import { Image, Input, Select, SelectItem } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";

const MortgageAndHouseRentList = () => {
  //   const { transactionType } = useAppSelector((store) => store.global);
  const dispatch = useAppDispatch();

  const { data } = useQuery({
    queryKey: ["locations"],
    queryFn: () => axiosInstance.get("/locations"),
  });

  return (
    <div className="flex flex-col gap-10 my-10 px-14">
      <div className="flex items-center gap-6">
        <Input
          placeholder="جستجو کنید ..."
          label="جستجو"
          labelPlacement="outside"
          className="w-[23%]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 px-0 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
          startContent={
            <div className="me-1">
              <Image
                className="w-14 h-12"
                src="/images/mortgage and house rent/Frame 81.png"
              />
            </div>
          }
        />

        <Select
          placeholder="انتخاب کنید"
          label="مرتب سازی بر اساس"
          labelPlacement="outside"
          className="w-[14%]"
          classNames={{
            trigger:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
        >
          <SelectItem>محبوب ترین</SelectItem>
          <SelectItem>گران ترین</SelectItem>
          <SelectItem>ارزان ترین</SelectItem>
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
          className="w-[14%]"
          classNames={{
            trigger:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 rounded-full h-12",
            label: "py-2 font-bold",
          }}
          onChange={(e) => console.log(e.target.value)}
        >
          {(item: { label: string; key: string }) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          )}
        </Select>

        <Select
          placeholder="انتخاب کنید"
          label="نوع ملک"
          labelPlacement="outside"
          className="w-[14%]"
          classNames={{
            trigger:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 rounded-full h-12",
            label: "py-2 font-bold",
          }}
        >
          <SelectItem>آپارتمان</SelectItem>
          <SelectItem>ویلا</SelectItem>
          <SelectItem>روستایی</SelectItem>
        </Select>

        <Select
          placeholder="انتخاب کنید"
          label="نوع معامله"
          labelPlacement="outside"
          className="w-[14%]"
          classNames={{
            trigger:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 rounded-full h-12",
            label: "py-2 font-bold",
          }}
          onChange={(e) => dispatch(setTransactionType(e.target.value))}
        >
          <SelectItem key="rental">اجاره</SelectItem>
          <SelectItem key="mortgage">رهن</SelectItem>
        </Select>
      </div>

      <div className="flex gap-8">
        <Input
          label="حداکثر قیمت"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-[14%]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
        />
        <Input
          label="حداقل اجاره"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-[14%]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
        />
        <Input
          label="حداکثر اجاره"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-[14%]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
        />
        <Input
          label="حداقل متراژ"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-[14%]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
        />
        <Input
          label="حداکثر متراژ"
          labelPlacement="outside"
          placeholder="وارد کنید"
          className="w-[14%]"
          classNames={{
            inputWrapper:
              "bg-lightGrey-100 data-[hover]:bg-lightGrey-200 ps-5 h-12 rounded-full",
            label: "py-2 font-bold",
          }}
        />
      </div>
    </div>
  );
};

export default MortgageAndHouseRentList;
