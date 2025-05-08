import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    sort: "",
    order: "ASC",
    search: "",
    location: "",
    propertyType: "",
    transactionType: "" ,
    minPrice: "",
    maxPrice: "",
    minRent: "",
    maxRent: "",
    minMortgage: "",
    maxMortgage: "",
    minArea: "",
    maxArea: "",
  };

  export const houseReserveSlice = createSlice ({
    name: 'housereserve',
    initialState,
    reducers:{
        setHousePage: (state, action) => {
            state.page = action.payload;
          },
        setHouseSort: (state, action) => {
            state.sort = action.payload;
          },
          setHouseOrder: (state, action) => {
            state.order = action.payload;
          },
          setHouseSearch: (state, action) => {
            state.search = action.payload;
          },
          setHouseLocation: (state, action) => {
            state.location = action.payload;
          },
          setHousePropertyType: (state, action) => {
            state.propertyType = action.payload;
          },
          setHouseTransactionType: (state, action) => {
            state.transactionType = action.payload;
          },
          setHouseMinPrice: (state, action) => {
            state.minPrice = action.payload;
          },
          setHouseMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
          },
          setHouseMinRent: (state, action) => {
            state.minRent = action.payload;
          },
          setHouseMaxRent: (state, action) => {
            state.maxRent = action.payload;
          },
          setHouseMinMortgage: (state, action) => {
            state.minMortgage = action.payload;
          },
          setHouseMaxMortgage: (state, action) => {
            state.maxMortgage = action.payload;
          },
          setHouseMinArea: (state, action) => {
            state.minArea = action.payload;
          },
          setHouseMaxArea: (state, action) => {
            state.maxArea = action.payload;
          },
    }
  })

  export const {
    setHousePage,
    setHouseSort ,
    setHouseLocation ,
    setHouseMaxArea ,
    setHouseMaxMortgage,
    setHouseMaxPrice,
    setHouseMaxRent,
    setHouseMinArea,
    setHouseMinMortgage,
    setHouseMinPrice,
    setHouseMinRent,
    setHouseOrder,
    setHousePropertyType,
    setHouseSearch,
    setHouseTransactionType,
 } = houseReserveSlice.actions

 export default houseReserveSlice.reducer