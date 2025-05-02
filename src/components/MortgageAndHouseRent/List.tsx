"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPage } from "@/redux/slices/houses";
import { getAllHouses } from "@/utils/services/api/houses";
import { Pagination } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import MortgageAndHouseRentCard from "./Card";
import { HouseProps } from "@/types";
import InputsModal from "./InputsModal";

const MortgageAndHouseRentList = () => {
  const dispatch = useAppDispatch();
  const {
    page,
    sort,
    order,
    search,
    location,
    propertyType,
    transactionType,
    minPrice,
    maxPrice,
    minRent,
    maxRent,
    minMortgage,
    maxMortgage,
    minArea,
    maxArea,
  } = useAppSelector((store) => store.houses);

  const {
    data: houses,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["houses", page],
    queryFn: () =>
      getAllHouses(
        page,
        sort,
        order,
        search,
        location,
        propertyType,
        transactionType,
        minPrice,
        maxPrice,
        minRent,
        maxRent,
        minMortgage,
        maxMortgage,
        minArea,
        maxArea
      ),
  });

  useEffect(() => {
    refetch();
  }, [
    page,
    sort,
    order,
    search,
    location,
    transactionType,
    propertyType,
    minPrice,
    maxPrice,
    minRent,
    maxRent,
    minMortgage,
    maxMortgage,
    minArea,
    maxArea,
  ]);

  if (error) {
    return (
      <p className="text-center text-xl mb-14">خطا در دریافت اطلاعات :(</p>
    );
  }

  if (isLoading) {
    return null;
  }

  return (
    <div className="mx-14 mt-20">
      <div className="lg:hidden mb-6 pb-4 border-b">
        <InputsModal />
      </div>
      {houses?.data.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">
          {houses?.data.map((house: HouseProps) => (
            <MortgageAndHouseRentCard {...house} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl mb-14">هیچی پیدا نکردم! :(</p>
      )}
      {houses?.data.length > 0 && (
        <div className="overflow-hidden">
          <Pagination
            style={{ direction: "ltr" }}
            className="mt-[46px] mb-[72px]"
            classNames={{
              base: "flex justify-center",
              item: "rounded-full mx-1",
              prev: "bg-white border border-main rounded-full",
              next: "bg-white border border-main rounded-full",
              cursor: "bg-main rounded-full",
            }}
            total={Math.ceil(houses?.data.length / 10)}
            page={page}
            showControls
            onChange={(number) => dispatch(setPage(number))}
          />
        </div>
      )}
    </div>
  );
};

export default MortgageAndHouseRentList;
