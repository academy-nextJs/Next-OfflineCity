import axiosInstance from "../../interceptor/axios";

export const getAllHouses = (
  page: number,
  sort: string,
  order: string,
  search: string,
  location: string,
  propertyType: string,
  transactionType: string,
  minPrice?: string,
  maxPrice?: string,
  minRent?: string,
  maxRent?: string,
  minMortgage?: string,
  maxMortgage?: string,
  minArea?: string,
  maxArea?: string
) =>
  axiosInstance.get(
    `/houses?page=${page}&limit=10&sort=${sort}&order=${order}${
      search ? `&search=${search}` : ""
    }${location ? `&location=${location}` : ""}${
      propertyType ? `&propertyType=${propertyType}` : ""
    }${transactionType ? `&transactionType=${transactionType}` : ""}${
      minPrice ? `&minPrice=${minPrice}` : ""
    }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
      minRent ? `&minRent=${minRent}` : ""
    }${maxRent ? `&maxRent=${maxRent}` : ""}${
      minMortgage ? `&minMortgage=${minMortgage}` : ""
    }${maxMortgage ? `&maxMortgage=${maxMortgage}` : ""}${
      minArea ? `&minArea=${minArea}` : ""
    }${maxArea ? `&maxArea=${maxArea}` : ""}`
  );
