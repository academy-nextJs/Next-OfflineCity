import axiosInstance from "../../interceptor/axios";

export const getAllHouses = (
  page: number,
  order: string,
  transactionType: string,
  sort: string,
  propertyType: string,
  search: string,
  location: string,
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
    `/houses?page=${page}&limit=10${order ? `&order=${order}` : ""}${
      transactionType ? `&transactionType=${transactionType}` : ""
    }${sort ? `&sort=${sort}` : ""}${
      propertyType ? `&propertyType=${propertyType}` : ""
    }${search ? `&search=${search}` : ""}${
      location ? `&location=${location}` : ""
    }${minPrice ? `&minPrice=${minPrice}` : ""}${
      maxPrice ? `&maxPrice=${maxPrice}` : ""
    }${minRent ? `&minRent=${minRent}` : ""}${
      maxRent ? `&maxRent=${maxRent}` : ""
    }${minMortgage ? `&minMortgage=${minMortgage}` : ""}${
      maxMortgage ? `&maxMortgage=${maxMortgage}` : ""
    }${minArea ? `&minArea=${minArea}` : ""}${
      maxArea ? `&maxArea=${maxArea}` : ""
    }`
  );
