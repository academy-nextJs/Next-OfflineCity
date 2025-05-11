import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  sort: "",
  order: "ASC",
  search: "",
  location: "",
  propertyType: "",
  transactionType: "",
  minPrice: "",
  maxPrice: "",
  minRent: "",
  maxRent: "",
  minMortgage: "",
  maxMortgage: "",
  minArea: "",
  maxArea: "",
};

export const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setPropertyType: (state, action) => {
      state.propertyType = action.payload;
    },
    setTransactionType: (state, action) => {
      state.transactionType = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMinRent: (state, action) => {
      state.minRent = action.payload;
    },
    setMaxRent: (state, action) => {
      state.maxRent = action.payload;
    },
    setMinMortgage: (state, action) => {
      state.minMortgage = action.payload;
    },
    setMaxMortgage: (state, action) => {
      state.maxMortgage = action.payload;
    },
    setMinArea: (state, action) => {
      state.minArea = action.payload;
    },
    setMaxArea: (state, action) => {
      state.maxArea = action.payload;
    },
  },
});

export const {
  setPage,
  setTransactionType,
  setPropertyType,
  setSort,
  setOrder,
  setSearch,
  setLocation,
  setMinPrice,
  setMaxPrice,
  setMinRent,
  setMaxRent,
  setMinMortgage,
  setMaxMortgage,
  setMinArea,
  setMaxArea,
} = housesSlice.actions;

export default housesSlice.reducer;
