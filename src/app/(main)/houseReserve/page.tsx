"use client"

import MapView from '@/components/HouseReserve/Map/MapView'
import { useAppSelector } from '@/redux/hooks'
import { HouseProps } from '@/types'
import { getAllHousesReserve } from '@/utils/services/api/HouseReserve'
import { getAllHouses } from '@/utils/services/api/houses'
import axiosInstance from '@/utils/services/interceptor/axios'
import { Spinner } from '@heroui/react'
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from 'react'

const page = () => {
const [housereserve, setHouseReserve] = useState<HouseProps[]>([])

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
} = useAppSelector((store) => store.housereserve);

  const {
    data: houses,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: [
      "houses",
      page,

  ],
    queryFn: () =>
      getAllHousesReserve(
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
      <p className="text-center text-xl mb-14"> چیزی دنیه برار (خوش گلدین) </p>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center my-14">
        <Spinner color="secondary" size="lg" />
      </div>
    );
  }
  
   console.log("housereserves" , houses)
  
  return (
    <div >
      <MapView houses={houses?.data} />
    </div>
  )
}

export default page 